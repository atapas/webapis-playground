import { FaVoicemail, FaStopCircle } from 'react-icons/fa';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/web-speech';

function WebSpeech() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-start
      "
    >
      <div className="tw-space-x-4">
        <Button leftIcon={<FaVoicemail />} onClick={run()?.onStartListen}>
          Start listening
        </Button>
        <Button leftIcon={<FaStopCircle />} onClick={run()?.onStopListen}>
          Stop
        </Button>
      </div>

      <div
        className="
          tw-flex
          tw-flex-col
          tw-w-full
          tw-mt-6
          tw-overflow-hidden
          tw-border
        tw-border-gray-200
          tw-rounded-lg
        "
      >
        <div
          className="
            tw-p-4
            tw-prose
            tw-text-gray-600
          "
        >
          <span id="js-speech--interim" className="tw-font-bold" />
          <span id="js-speech--final" />
        </div>

        <span
          className="
            tw-p-4
            tw-border-t
            tw-border-gray-200
            tw-font-semibold
            tw-text-gray-600
          "
        >
          Transcript
        </span>
      </div>
    </div>
  );
}

export default WebSpeech;
