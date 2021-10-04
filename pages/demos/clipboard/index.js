import { useState, useEffect } from 'react';

// router
import { useRouter } from 'next/router';

// icons
import { FiFileText, FiImage } from 'react-icons/fi';

// demo and form components
import {
  DemoInfo,
  DemoSEO,
  NotSupported,
  InputFieldWrapper,
  InputFieldButton,
  InputField,
} from 'components';

// apis
import { isSupported, performCopy, performPaste } from 'web-apis/clipboard';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Component that Renders the Demo UI
const ToRender = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
      <InputFieldWrapper>
        <InputField
          id="copy-input"
          type="text"
          name="copy"
          placeholder="Write Something..."
        />
        <InputFieldButton onClick={performCopy}>Copy</InputFieldButton>
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          id="paste-input"
          type="text"
          name="paste"
          placeholder="Click paste"
          readOnly
        />
        <InputFieldButton onClick={performPaste}>Paste</InputFieldButton>
      </InputFieldWrapper>
    </div>
  );
};

const Clipboard = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the query param from router
  const { query } = useRouter();

  // Get the demo id
  const id = '_clipboard_api_';

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

export default Clipboard;
