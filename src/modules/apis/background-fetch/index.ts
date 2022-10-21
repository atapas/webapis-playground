export const hasSupport = (): boolean => {
  // const sw = `addEventListener('backgroundfetchsuccess', event => {
  //   console.log('[Service Worker]: Background Fetch Success', event.registration);
  // });

  // self.addEventListener('install', () => {
  //   console.log('[Service Worker]: Installed');
  // });

  // self.addEventListener('activate', () => {
  //   console.log('[Service Worker]: Active');
  // });`;
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
    return true;
  }
  return false;
};

function download(url: string) {
  try {
    const nav = navigator.serviceWorker.ready.then(async swReg => {
      console.log({ url });
      console.log({ swReg });
      const d = await swReg.backgroundFetch.fetch('my-fetch', [url]);
      return d;
      // const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', [url]);
      // return bgFetch;
    });
    console.log(nav);
  } catch (error) {
    console.log({ error });
  }
}

addEventListener('backgroundfetchsuccess', event => {
  console.log('[Service Worker]: Background Fetch Success', event);
});

self.addEventListener('install', () => {
  console.log('[Service Worker]: Installed');
});

self.addEventListener('activate', () => {
  console.log('[Service Worker]: Active');
});

const run = {
  download,
};

export default run;
