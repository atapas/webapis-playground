import run, { hasSupport } from '../../apis/canvas-api';

import { Button, NotSupported } from 'components';

function CanvasApi() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <>
      <div>
        <Button onClick={run}>Show Canvases</Button>
      </div>

      <div className="tw-block">
        <div className="tw-block tw-mb-10 tw-mt-5">
          <h2 className="tw-mb-2 tw-font-bold">
            Canvas with calculated colors:
          </h2>
          <canvas id="gridCanvas"></canvas>
        </div>

        <div className="tw-block tw-mb-10 tw-mt-5">
          <h2 className="tw-mb-2 tw-font-bold">
            You can draw a flag with a few lines of code:
          </h2>
          <canvas id="flagCanvas"></canvas>
        </div>

        <div>
          <h2 className="tw-mb-2 tw-font-bold">
            And even achieve a free drawing canvas like this one:
          </h2>
          <canvas
            id="drawingCanvas"
            style={{ height: '60vh', width: '50vw', border: '1px solid #000' }}
          ></canvas>
        </div>
      </div>
    </>
  );
}

export default CanvasApi;
