const isSupported = () => {
  return 'pictureInPictureEnabled' in document ? true : false;
};

// initializing the elements using ids and handlers
const init = () => {
  const actionBtnId = document.getElementById('actionBtnId');
  const video = document.getElementById('video-id');

  // Called when a picture-in-picture mode is activated
  video.addEventListener('enterpictureinpicture', () => {
    actionBtnId.textContent = 'Exit Picture-in-Picture mode';
  });

  // Called when a picture-in-picture mode is deactivated
  video.addEventListener('leavepictureinpicture', () => {
    actionBtnId.textContent = 'Enter Picture-in-Picture mode';
  });
};

// Toggle the picture-in-picture mode on and off.
const toggle = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    document.getElementById('video-id').requestPictureInPicture();
  }
};

export { isSupported, init, toggle };
