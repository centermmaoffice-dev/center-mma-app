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

  event.waitUntil((async function () {
    // Only acknowledge after the browser has successfully displayed the push.
    await self.registration.showNotification(title, options);

    if (data.deliveryAckToken && data.deliveryAckUrl && data.deliveryAckKey) {
      const response = await fetch(data.deliveryAckUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': data.deliveryAckKey,
          'Authorization': 'Bearer ' + data.deliveryAckKey
        },
        body: JSON.stringify({ p_token: data.deliveryAckToken })
      });
      if (!response.ok) {
        console.error('Private-message push receipt acknowledgement failed:', response.status);
      }
    }
  })().catch(function (error) {
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
