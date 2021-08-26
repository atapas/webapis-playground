// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import {
  isSupported,
  getUserMedia,
  videoOff,
  grabFrame,
  takePhoto,
} from 'web-apis/image-capture';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="flex-colums">
      <div style={{ padding: '5px' }}>
        <button id="getUserMediaButton" onClick={() => getUserMedia()}>
          Start the Stream
        </button>{' '}
        <button onClick={() => videoOff()}>Switch Off</button>{' '}
        <button
          id="grabFrameButton"
          onClick={() => grabFrame()}
          disabled={!isSupported()}
        >
          Grab Frame
        </button>{' '}
        <button
          id="takePhotoButton"
          onClick={() => takePhoto()}
          disabled={!isSupported()}
        >
          Take Photo
        </button>
      </div>
      <div>
        <video
          style={{ height: '198px', width: '100%', border: '2px solid' }}
          autoPlay
        ></video>
      </div>
      <div id="error-msg-id" className="error hide"></div>
      <div>
        <canvas id="grabFrameCanvas"></canvas>
        <canvas id="takePhotoCanvas"></canvas>
      </div>
    </div>
  );
};

const ImageCapture = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = '_image_capture_api_';

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

export default ImageCapture;
