import { useState, useEffect } from 'react';

// router
import { useRouter } from 'next/router';

// icons
import { FiFileText, FiImage } from 'react-icons/fi';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// apis
import { isSupported, performCopy, performPaste } from 'web-apis/clipboard';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

// Reusable component for Input Field wrapper.
const InputFieldWrapper = ({ children }) => {
  return (
    <div className="tw-flex tw-border-solid tw-border-1 tw-border-gray-300 tw-rounded-4px tw-mb-5">
      {children}
    </div>
  );
};

// Reusable styled input field.
const InputField = props => {
  return (
    <input
      {...props}
      className="tw-w-full tw-appearance-none tw-border-none leading-tight tw-py-3 tw-px-4 tw-rounded-tr-none tw-rounded-br-none tw-rounded-tl-4px tw-rounded-bl-4px tw-outline-none"
    />
  );
};

// Reusable Button within the input wrapper
const InputFieldButton = ({ onClick, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="tw-rounded-tl-none tw-rounded-bl-none tw-border-solid tw-border-t-1 tw-border-r-1 tw-border-b-1 tw-border-l-none tw-border-gray-300 tw-text-18px"
      {...rest}
    >
      {children}
    </button>
  );
};

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
