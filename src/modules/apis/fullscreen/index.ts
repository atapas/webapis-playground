export const hasSupport = (): boolean =>
  Boolean('fullscreenEnabled' in document);

function run() {
  const root = document.getElementById('js-api--fullscreen') as HTMLElement;

  if (hasSupport()) {
    root?.requestFullscreen();
  } else {
    console.log('The FullScreen API is Not Supported');
  }

  document.addEventListener('fullscreenchange', () => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    let image = root.querySelector('img') as HTMLElement;

    if (document.fullscreenElement) {
      console.log(
        `Element: ${document.fullscreenElement.id} entered full-screen mode.`
      );

      // Make the image responsive in the FussScreen mode.
      if (root) {
        image.style.width = '100%';
        image.style.height = 'auto';
      }
    } else {
      console.log('Leaving full-screen mode.');

      // Back to the fixed size when full screen is exited
      image.style.width = '';
      image.style.height = '';
    }
  });
}

export default run;
