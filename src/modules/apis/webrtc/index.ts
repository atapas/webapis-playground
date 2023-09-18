export const hasSupport = (): boolean => 'mediaDevices' in navigator;

const startRecording = '🔴 Start recording';
const stopRecording = '🟢 Stop recording';

let recordedBlobs: Array<Blob> = [];

let userStream: MediaStream;
let recorder: MediaRecorder | undefined;
let displayStream: MediaStream;

async function requestToDisplayMedia() {
  try {
    displayStream = await navigator.mediaDevices.getDisplayMedia();

    loadStreamMedia('#displayMedia', displayStream);
  } catch (err) {
    console.error(err);
  }
}

async function requestPermissionForUserMedia() {
  const options = {
    audio: false,
    video: true,
  };

  try {
    userStream = await navigator.mediaDevices.getUserMedia(options);

    loadStreamMedia('#userMedia', userStream);
  } catch (err) {
    console.error(err);
  }
}

function handleRecorder(event: any) {
  const streamType: string = event.target.getAttribute('data-stream');
  const recordButton = document.querySelector(`[data-stream="${streamType}"]`)!;

  const getMediaStream: any = {
    userMedia: userStream,
    displayMedia: displayStream,
  };

  const stream = getMediaStream[streamType];

  if (recorder === undefined) {
    recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (event: any) => {
      if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
      }
    };
  }

  try {
    if (recordButton.textContent === startRecording) {
      recorder.start();

      recordButton.textContent = stopRecording;
    } else {
      recorder.stop();
      recordButton.textContent = startRecording;
    }
  } catch (error) {
    console.error('Exception while creating MediaRecorder:', error);
    return;
  }
}

function downloadRecord() {
  var blob = new Blob(recordedBlobs, { type: 'video/mp4' });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'record.mp4';
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    recordedBlobs = [];
    recorder = undefined;
  }, 100);
}

function loadStreamMedia(selector: string, stream: MediaStream): void {
  const video: HTMLMediaElement | null = document.querySelector(selector);

  if (video === null) return;

  video.srcObject = stream;
  video.onloadedmetadata = () => video.play();
}

const run = {
  hasSupport,
  requestPermissionForUserMedia,
  requestToDisplayMedia,
  handleRecorder,
  downloadRecord,
};

export default run;
