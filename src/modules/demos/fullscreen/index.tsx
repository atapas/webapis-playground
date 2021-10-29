import run, { hasSupport } from '../../apis/fullscreen';

import { FaExpand } from 'react-icons/fa';

import { Button } from 'components';

function FullScreen() {
  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  }

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div id="js-api--fullscreen" className="tw-mb-4">
        <img
          src="https://res.cloudinary.com/atapas/image/upload/v1602226996/artists/Rock_oz3kq1.png"
          alt="Rock"
          width="200px"
          height="200px"
        />
      </div>

      <Button onClick={run} leftIcon={<FaExpand />}>
        Go to fullscreen
      </Button>
    </div>
  );
}

export default FullScreen;
