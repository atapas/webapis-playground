// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported, buy } from 'web-apis/web-payments';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <button onClick={buy}>Click Here to Buy</button>
      <div className="tw-border tw-border-solid tw-bg-payments tw-border-payments tw-p-10px tw-m-10px tw-rounded-4px">
        <p>
          Feel free to try out this information for purchase(Dont worry, it is
          all FAKE!!! 🙊)
        </p>
        <ul>
          <li>
            Credit Card Number: <b>42424242</b>
          </li>
          <li>
            Name on the Card: <b>Whatever you want</b>
          </li>
          <li>
            Card Expiry: <b>Any Future Date</b>
          </li>
          <li>
            CVV: <b>Any 3-digits number</b>
          </li>
        </ul>
      </div>
      <div className="tw-p-5px tw-m-5px tw-rounded-5px tw-text-25px" id="payment-msg-id"></div>
    </div>
  );
};

const WebPayments = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_payment_request_api_';

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

export default WebPayments;
