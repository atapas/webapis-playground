// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported } from 'web-apis/web-share-api';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// icons
import { FaShareAlt } from 'react-icons/fa';

// Component that Renders the Demo UI
const ToRender = () => {
  const [isShared, setIsShared] = useState(false);
  const shareData = {
    title: 'Web APIs Playground',
    text: 'Create, Share, Learn JavaScript Web APIs',
    url: 'https://webapis.vercel.app',
  };
  async function handleClick() {
    try {
      await navigator.share(shareData);
      setIsShared(true);
    } catch (error) {
      setIsShared(false);
    }
  }
  return (
    <div className="flex-colums">
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleClick}
      >
        <FaShareAlt style={{ marginRight: 5 }} />
        Share
      </button>
      <p>{isShared && 'Content shared'}</p>
    </div>
  );
};

const WebShareApi = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_web_share_api_';

  useEffect(() => {
    // find the demo details
    const thisDemo = getDemoById(id);
    setDemoInfo(thisDemo);
    setLoaded(true);
  }, [id]);

  return (
    <>
      {loaded && (
        <div className="flex-colums">
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

export default WebShareApi;
