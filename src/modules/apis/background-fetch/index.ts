export const hasSupport = (): boolean => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
    return true;
  }
  return false;
};
export async function backgroundFetch(url: string) {
  const registration = await navigator.serviceWorker.ready;
  return await registration.backgroundFetch.fetch('my-fetch', [url], {
    title: 'Blog build tools, JS blocks, and opener-policy',
    downloadTotal: 22032728,
  });
}

function download(url: string) {
  try {
    backgroundFetch(url);
  } catch (error) {
    console.error(error);
  }
}

const run = {
  download,
};

export default run;
