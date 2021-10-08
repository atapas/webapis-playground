import { useState, useEffect } from 'react';

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
      <div className="btns tw-flex tw-gap-4 tw-flex-col tw-items-center tw-justify-center sm:tw-flex-row tw-mb-5">
        <button
          id="textFileBtn"
          onClick={textFileUpload}
          className="tw-flex tw-px-5 tw-py-2 tw-justify-center tw-items-center"
        >
          <FiFileText />
          <span className="tw-ml-2">Select a text file</span>
        </button>
        <button
          id="imageFileBtn"
          onClick={imageUpload}
          className="tw-flex tw-px-5 tw-py-2 tw-justify-center tw-items-center"
        >
          <FiImage data-feather="image" />
          <span className="tw-ml-2">Select an image file</span>
        </button>
      </div>
      <h2 id="fileName"></h2>
      <p id="textFileContents"></p>
      <div
        id="imagePreviewParent"
        className="content tw-mt-4  tw-h-400px tw-w-400px"
      ></div>
    </div>
  );
};

const FileSystem = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

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
