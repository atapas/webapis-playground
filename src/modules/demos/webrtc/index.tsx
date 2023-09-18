import run, { hasSupport } from '../../apis/webrtc';
import { MdOutlineScreenShare } from 'react-icons/md';

import { Button } from 'components';

function Webrtc() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <main>
      <section>
        <header>
          <h2 className="tw-text-base md:tw-text-xl tw-font-bold tw-mb-3">
            🎥 Allowing access to camera and microphone
          </h2>
        </header>
        <div className="tw-mb-3">
          <Button
            className="tw-mr-3 tw-mb-2"
            onClick={run.requestPermissionForUserMedia}
          >
            🎙️ Allow access to camera and microphone
          </Button>

          <Button
            className="tw-mr-3 tw-mb-2"
            data-stream="userMedia"
            onClick={run.handleRecorder}
          >
            🔴 Start recording
          </Button>

          <Button className="tw-mb-2" onClick={run.downloadRecord}>
            👇 Download
          </Button>
        </div>

        <video className="tw-w-full tw-bg-black" id="userMedia"></video>
      </section>

      <section className="tw-mt-3">
        <header>
          <h2 className="tw-text-base md:tw-text-xl tw-font-bold tw-mb-3">
            🖥️ Screensharing
          </h2>
        </header>

        <div className="tw-mb-3">
          <Button
            className="tw-mr-3 tw-mb-2"
            leftIcon={<MdOutlineScreenShare />}
            onClick={run.requestToDisplayMedia}
          >
            Share your screen
          </Button>

          <Button
            className="tw-mr-3 tw-mb-2"
            data-stream="displayMedia"
            onClick={run.handleRecorder}
          >
            🔴 Start recording
          </Button>

          <Button className="tw-mb-2" onClick={run.downloadRecord}>
            👇 Download
          </Button>
        </div>

        <video className="tw-w-full tw-bg-black" id="displayMedia"></video>
      </section>
    </main>
  );
}

export default Webrtc;
