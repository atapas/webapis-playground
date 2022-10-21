addEventListener('backgroundfetchsuccess', event => {
  console.log('[Service Worker]: Background Fetch Success', event.registration);
  event.waitUntil(registerCache(event));
});

async function registerCache(event) {
  try {
    const cache = await caches.open(event.registration.id);
    const records = await event.registration.matchAll();
    const promises = records.map(async record => {
      const response = await record.responseReady;
      await cache.put(record.request, response);
    });
    await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
}

addEventListener('install', () => {
  console.log('[Service Worker]: Installed');
});

addEventListener('activate', () => {
  console.log('[Service Worker]: Active');
});
