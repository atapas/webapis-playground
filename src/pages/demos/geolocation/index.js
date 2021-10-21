// state management
import React, { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported, geoFindMe } from 'web-apis/geolocation';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = React.memo(() => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <button onClick={geoFindMe} style={{ padding: '0.6rem 1rem' }}>
        <span>Show my current location</span>
      </button>
      <p className="text-red-600" id="error-text" />
      <a target="_blank" id="map-link" />
      <p id="map-accuracy" />
    </div>
  );
});

ToRender.displayName = 'ToRender';

const Geolocation = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_geolocation_';

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

export default Geolocation;
