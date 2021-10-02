import { useState, useEffect } from 'react';

// router
import { useRouter } from 'next/router';

// icons
import { FiFileText, FiImage } from 'react-icons/fi';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// apis
import {
  isSupported,
  textFileUpload,
  imageUpload,
} from 'web-apis/filesystem-api';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <div className="btns tw-flex tw-gap-4 tw-flex-col tw-items-center tw-justify-center sm:tw-flex-row">
        <button id="textFileBtn" onClick={textFileUpload}>
          <FiFileText style={{ width: '1rem', height: '1rem' }} />
          Select a text file
        </button>
        <button id="imageFileBtn" onClick={imageUpload}>
          <FiImage
            data-feather="image"
            style={{ width: '1rem', height: '1rem' }}
          />
          Select an image file
        </button>
      </div>
      <h2 id="fileName"></h2>
      <div className="content tw-mt-4">
        <p id="textFileContents"></p>
        <img src="" id="imagePreview" alt="text image" layout="fill" />
      </div>
    </div>
  );
};

const FileSystem = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the query param from router
  const { query } = useRouter();

  // Get the demo id
  const id = '_file_system_api_';

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

export default FileSystem;
