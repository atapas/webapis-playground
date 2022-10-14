import { Button } from '@/components/Button';
import run, { hasSupport } from '../../apis/eyedropper-api';

function EyedropperApi() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div>
      <Button id="open-eyedropper" onClick={run}>
        Open Eyedropper
      </Button>

      <div
        className="tw-mt-5 tw-border tw-border-sky-500 tw-py-3 tw-px-5"
        id="color-container"
      >
        {/* color */}
        <div id="color" className="tw-w-32 tw-h-16 tw-rounded"></div>
        {/* color hex code */}
        <p className="tw-font-bold" id="color-hex-code"></p>
      </div>
    </div>
  );
}

export default EyedropperApi;
