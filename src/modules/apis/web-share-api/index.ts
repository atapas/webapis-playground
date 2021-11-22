export const hasSupport = (): boolean => Boolean('share' in navigator);

async function run() {
  try {
    await navigator.share({
      title: 'Web APIs Playground',
      text: 'Create, Share, Learn JavaScript Web APIs',
      url: 'https://webapis.vercel.app',
    });
  } catch (err) {
    console.warn(err);
  }
}

export default run;
