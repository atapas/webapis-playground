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
  const [networkInfo] = useState(getNetworkInfo());
  const UNKNOWN_STRING = 'Unknown';

  return (
    <table className="tw-shadow-lg tw-bg-white tw-mt-4">
      <thead>
        <tr>
          <th className="tw-bg-blue-100 tw-border tw-text-left tw-px-8 tw-py-2">
            Property
          </th>
          <th className="tw-bg-blue-100 tw-border tw-text-left tw-px-8 tw-py-2">
            Value
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="tw-border tw-px-8 tw-py-2">Network Type</td>
          <td className="tw-border tw-px-8 tw-py-2">
            {networkInfo.effectiveType || UNKNOWN_STRING}
          </td>
        </tr>
        <tr>
          <td className="tw-border tw-px-8 tw-py-2">Round Trip Time(rtt)</td>
          <td className="tw-border tw-px-8 tw-py-2">
            {networkInfo.rtt || UNKNOWN_STRING}
          </td>
        </tr>

        <tr>
          <td className="tw-border tw-px-8 tw-py-2">
            Bandwidth estimate(in MBPS)
          </td>
          <td className="tw-border tw-px-8 tw-py-2">
            {networkInfo.downlink || UNKNOWN_STRING}
          </td>
        </tr>

        <tr>
          <td className="tw-border tw-px-8 tw-py-2">
            Max Bandwidth estimate(in MBPS)
          </td>
          <td className="tw-border tw-px-8 tw-py-2">
            {networkInfo.downlinksMax || UNKNOWN_STRING}
          </td>
        </tr>

        <tr>
          <td className="tw-border tw-px-8 tw-py-2">Save data enabled</td>
          <td className="tw-border tw-px-8 tw-py-2">
            {networkInfo.saveData ? 'Yes' : 'No'}
          </td>
        </tr>

        <tr>
          <td className="tw-border tw-px-8 tw-py-2">Device Connection Type</td>
          <td className="tw-border tw-px-8 tw-py-2">
            {networkInfo.type || UNKNOWN_STRING}
          </td>
        </tr>
      </tbody>
    </table>
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
