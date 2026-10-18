const CENTER_MMA_SW_VERSION = '20261018-1';

// A private-message push is sent once per message and once per subscribed
// device. Collect short bursts so the device shows one summary notification.
let privateMessagePushQueue = [];
let privateMessagePushTimer = null;
let privateMessagePushFlush = null;

function acknowledgePrivateMessagePush(data) {
  if (!data.deliveryAckToken || !data.deliveryAckUrl || !data.deliveryAckKey) {
    return Promise.resolve();
  }
  return fetch(data.deliveryAckUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': data.deliveryAckKey,
      'Authorization': 'Bearer ' + data.deliveryAckKey
    },
    body: JSON.stringify({ p_token: data.deliveryAckToken })
  }).then(function (response) {
    if (!response.ok) {
      throw new Error('Private-message push receipt acknowledgement failed: ' + response.status);
    }
  });
}

async function flushPrivateMessagePushes() {
  if (privateMessagePushFlush) {
    await privateMessagePushFlush;
    if (privateMessagePushQueue.length) return flushPrivateMessagePushes();
    return;
  }

  const batch = privateMessagePushQueue.splice(0);
  if (!batch.length) return;
  privateMessagePushFlush = (async function () {
    const notificationTag = 'center-mma-private-messages';
    const latest = batch[batch.length - 1].data;
    const existing = await self.registration.getNotifications({ tag: notificationTag });
    const previousCount = Number(existing[0]?.data?.messageCount || 0);
    const messageCount = previousCount + batch.length;
    const latestBody = latest.message || latest.body || '';
    const body = messageCount === 1
      ? latestBody
      : messageCount + ' новых сообщений. Последнее: ' + latestBody;

    await self.registration.showNotification(
      messageCount === 1 ? (latest.title || 'CENTER MMA') : 'CENTER MMA — новые сообщения',
      {
        body: body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: notificationTag,
        renotify: false,
        data: {
          notificationId: latest.notificationId || null,
          linkSection: latest.linkSection || null,
          messageId: latest.messageId || null,
          messageCount: messageCount,
          url: latest.url || '/'
        }
      }
    );

    // The displayed summary represents every push in this batch. Acknowledge
    // each message separately so delivery receipts remain accurate.
    await Promise.all(batch.map(function (item) {
      return acknowledgePrivateMessagePush(item.data);
    }));
  })();

  try {
    await privateMessagePushFlush;
    batch.forEach(function (item) { item.resolve(); });
  } catch (error) {
    batch.forEach(function (item) { item.reject(error); });
    throw error;
  } finally {
    privateMessagePushFlush = null;
    if (privateMessagePushQueue.length) {
      return flushPrivateMessagePushes();
    }
  }
}

function queuePrivateMessagePush(data) {
  return new Promise(function (resolve, reject) {
    privateMessagePushQueue.push({ data: data, resolve: resolve, reject: reject });
    if (privateMessagePushTimer) clearTimeout(privateMessagePushTimer);
    privateMessagePushTimer = setTimeout(function () {
      privateMessagePushTimer = null;
      void flushPrivateMessagePushes().catch(function (error) {
        console.error('Could not show grouped private-message notification:', error);
      });
    }, 900);
  });
}

self.addEventListener('install', function (event) {
  // Activate the current push handler immediately after deployment.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
  // Make the updated handler control existing app windows without waiting
  // for every older app tab to close.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function (event) {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    data = {
      title: 'CENTER MMA',
      message: event.data ? event.data.text() : ''
    };
  }

  const title = data.title || 'CENTER MMA';
  const options = {
    body: data.message || data.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: data.tag || ('center-mma-' + (data.notificationId || Date.now())),
    renotify: false,
    data: {
      notificationId: data.notificationId || null,
      linkSection: data.linkSection || null,
      messageId: data.messageId || null,
      url: data.url || '/',
      deliveryAckToken: data.deliveryAckToken || null,
      deliveryAckUrl: data.deliveryAckUrl || null,
      deliveryAckKey: data.deliveryAckKey || null
    }
  };

  const delivery = data.messageId && data.deliveryAckToken
    ? queuePrivateMessagePush(data)
    : self.registration.showNotification(title, options);

  event.waitUntil(Promise.resolve(delivery).catch(function (error) {
    console.error('Could not display or acknowledge push notification:', error);
  }));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const data = event.notification.data || {};
  let targetUrl = data.url || '/';

  if (data.notificationId) {
    const separator = targetUrl.includes('?') ? '&' : '?';
    targetUrl += separator + 'notification=' + encodeURIComponent(data.notificationId);
  } else if (data.linkSection) {
    const separator = targetUrl.includes('?') ? '&' : '?';
    targetUrl += separator + 'section=' + encodeURIComponent(data.linkSection);
  }

  event.waitUntil((async function () {
    const clientList = await clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    });

    for (const client of clientList) {
      if ('focus' in client) {
        await client.focus();
        if ('navigate' in client) {
          await client.navigate(targetUrl);
        }
        return;
      }
    }

    if (clients.openWindow) {
      return clients.openWindow(targetUrl);
    }
  })());
});
