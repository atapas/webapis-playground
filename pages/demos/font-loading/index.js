// state management
import { useState, useEffect } from 'react';

// demo information
import { DemoInfo, DemoSEO, NotSupported } from 'components';

// api
import { isSupported } from 'web-apis/font-loading';

// demo info by id
import { getDemoById } from 'utils/data/data-access';

const loadableFonts = ['Roboto', 'OpenSans', 'Festive', 'Ephesis'];

const RenderRadioButton = ({ font, onChange, ...rest }) => (
  <div className="tw-w-40 tw-m-auto">
    <input
      type="radio"
      name="font"
      className="tw-mr-2"
      value={font}
      onChange={() => onChange(font)}
      {...rest}
    />
    <label htmlFor="font">
      <span onClick={() => onChange(font)}>{font}</span>
    </label>
  </div>
);

// Component that Renders the Demo UI
const ToRender = () => {
  const [font, setFont] = useState('Roboto');

  useEffect(() => {
    const loadFont = async () => {
      try {
        const fontName = new FontFace(
          font,
          `url(/fonts/${font}/${font}-Regular.ttf)`
        );
        // wait for font to be loaded
        await fontName.load();
        // add font to document
        document.fonts.add(fontName);
        // enable font with CSS class
        document.body.classList.add('fonts-loaded');
      } catch (e) {
        console.log('Font loading Error:', e);
      }
    };

    loadFont();
  }, [font]);

  return (
    <div className="flex-colums tw-text-center" style={{ fontFamily: font }}>
      <div className="tw-mb-2">
        <i>
          Find more fonts at{' '}
          <a
            className="tw-underline tw-text-blue-500"
            target="_blank"
            href="https://fonts.google.com/"
            rel="noreferrer"
          >
            fonts.google.com
          </a>
          !
        </i>
        <p>
          The currently selected font is{' '}
          <span className="tw-underline">{font}</span>
        </p>
      </div>
      <div className="tw-text-left">
        {loadableFonts.map(f => (
          <RenderRadioButton
            key={f}
            font={f}
            onChange={setFont}
            checked={f === font}
          />
        ))}
      </div>
    </div>
  );
};

const FontLoading = () => {
  const [loaded, setLoaded] = useState(false);
  const [demoInfo, setDemoInfo] = useState();

  // Get the demo id
  const id = 'css_font_loading';

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

export default FontLoading;
