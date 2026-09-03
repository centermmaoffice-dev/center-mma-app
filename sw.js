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
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
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
