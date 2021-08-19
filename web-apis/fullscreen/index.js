const isSupported = () => {
  return document.fullscreenEnabled ? true : false;
};

const makeFullScreen = () => {
  console.log('makeFullScreen function called');
  const elem = document.getElementById('fs-img-id');
  // Check if the API is supported
  if (document.fullscreenEnabled) {
    elem.requestFullscreen();
  } else {
    console.log('The FullScreen API is Not Supported');
  }

  document.addEventListener('fullscreenchange', event => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If there isn't one,
    // the value of the property is null.
    const elem = document.getElementById('fs-img-id');
    if (document.fullscreenElement) {
      console.log(
        `Element: ${document.fullscreenElement.id} entered full-screen mode.`
      );

      // Make the image responsive in the FussScreen mode.
      elem.children[0].style.width = '100%';
      elem.children[0].style.height = 'auto';
    } else {
      console.log('Leaving full-screen mode.');

      // Back to the fixed size when full screen is exited
      elem.children[0].style.width = '200px';
      elem.children[0].style.height = '200px';
    }
  });
};

export { isSupported, makeFullScreen };
