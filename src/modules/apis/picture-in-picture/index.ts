export const hasSupport = (): boolean =>
  Boolean('pictureInPictureEnabled' in document);

function run() {
  const button = document.getElementById('js-picture--button') as HTMLElement;
  const video = document.getElementById(
    'js-picture--video'
  ) as HTMLVideoElement;

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }

  video.addEventListener('enterpictureinpicture', () => {
    button.textContent = 'Exit Picture-in-Picture mode';
  });

  video.addEventListener('leavepictureinpicture', () => {
    button.textContent = 'Enter Picture-in-Picture mode';
  });
}

export default run;
