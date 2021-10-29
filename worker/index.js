'use strict';

self.addEventListener('push', function (event) {
  const data = JSON.parse(event.data.text());
  event.waitUntil(registration.showNotification(data.title, { ...data }));
});
