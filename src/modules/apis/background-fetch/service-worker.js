addEventListener('backgroundfetchsuccess', event => {
  console.log('[Service Worker]: Background Fetch Success', event.registration);
});

self.addEventListener('install', () => {
  console.log('[Service Worker]: Installed');
});

self.addEventListener('activate', () => {
  console.log('[Service Worker]: Active');
});
