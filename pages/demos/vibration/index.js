// state management
import { useState, useEffect } from 'react';

// router
import { useRouter } from 'next/router';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported, manageVibration } from 'web-apis/vibration';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <p className="tw-max-w-500px tw-mx-4 tw-p-5px">
        The Vibration API works best on mobiles, tablets etc. It may not do
        anything on desktops even when the browser supports.
      </p>
      <div className="tw-flex">
        <button
          style={{ marginRight: '10px' }}
          onClick={() => manageVibration('start')}
        >
          Start Vibration
        </button>{' '}
        <button onClick={() => manageVibration('stop')}>Stop Vibration</button>
      </div>
    </div>
  );
};

const Vibration = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the query param from router
  const { query } = useRouter();

  // Get the demo id
  const id = '_vibration_api_';

  useEffect(() => {
    // find the demo details
    const thisDemo = getDemoById(id);
    setDemoInfo(thisDemo);
    setLoaded(true);
  }, [id]);

  return (
    <>
      {loaded && (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <DemoSEO title={demoInfo.title} description={demoInfo.desc} />
          <DemoInfo info={demoInfo} />
          {isSupported() ? (
            <ToRender />
          ) : (
            <NotSupported canIUseURL={demoInfo.canIUseURL} />
          )}
        </div>
      )}
    </>
  );
};

export default Vibration;
