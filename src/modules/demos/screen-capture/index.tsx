import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/screen-capture';

function ScreenCapture() {
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
        <Button leftIcon={<FaPlayCircle />} onClick={run.onCapture}>
          Start Capture
        </Button>

        <Button leftIcon={<FaStopCircle />} onClick={run.onStop}>
          Stop capture
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
            tw-aspect-w-16
            tw-aspect-h-9
          "
        >
          <video id="js-screen--video" className="tw-w-full" autoPlay />
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
          Live preview
        </span>
      </div>
    </div>
  );
}

export default ScreenCapture;
