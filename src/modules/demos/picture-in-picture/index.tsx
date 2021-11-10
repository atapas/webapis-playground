import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/picture-in-picture';

function FullScreen() {
  if (!hasSupport()) {
    return <NotSupported />;
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-center
      "
    >
      <Button id="js-picture--button" onClick={run}>
        Enter Picture-in-Picture mode
      </Button>

      <video
        id="js-picture--video"
        className="tw-w-full tw-mt-4 tw-rounded-lg"
        src="https://res.cloudinary.com/atapas/video/upload/v1620052733/demos/earth_rotating_g1xv0f.mp4"
        muted
        autoPlay
        loop
      />
    </div>
  );
}

export default FullScreen;
