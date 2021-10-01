// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported, getNetworkInfo } from 'web-apis/network-information';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  const [networkInfo, setNetworkInfo] = useState(getNetworkInfo());
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <ul id="network-info-main">
        <li>
          <span>Network Type: </span>
          <span>
            <b>{networkInfo.effectiveType}</b>
          </span>
        </li>
        <li>
          <span>Round Trip Time(rtt): </span>
          <span>
            <b>{networkInfo.rtt}</b>
          </span>
        </li>
        <li>
          <span>Bandwidth estimate(in MBPS): </span>
          <span>
            <b>{networkInfo.downlink}</b>
          </span>
        </li>
        <li>
          <span>Max Bandwidth estimate(in MBPS): </span>
          <span>
            <b>{networkInfo.downlinksMax}</b>
          </span>
        </li>
        <li>
          <span>Save data enabled: </span>
          <span>
            <b>{networkInfo.saveData ? 'Yes' : 'No'}</b>
          </span>
        </li>
        <li>
          <span>Device Connection Type: </span>
          <span>
            <b>{networkInfo.type}</b>
          </span>
        </li>
      </ul>
    </div>
  );
};

const NetworkInformation = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_network_info_api_';

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

export default NetworkInformation;
