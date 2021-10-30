import React from 'react';

import { FaExpand } from 'react-icons/fa';

import { Button, NotSupported } from 'components';

import run, { hasSupport } from '../../apis/fullscreen';

function FullScreen() {
  if (!hasSupport) {
    return <NotSupported canIUseURL="" />;
  }

  return (
    <React.Fragment>
      <div id="js-api--fullscreen" className="tw-mb-4">
        <img
          src="https://res.cloudinary.com/atapas/image/upload/v1602226996/artists/Rock_oz3kq1.png"
          alt="The Rock"
          width="200px"
          height="200px"
        />
      </div>

      <Button leftIcon={<FaExpand />} onClick={run}>
        Go Fullscreen
      </Button>
    </React.Fragment>
  );
}

export default FullScreen;
