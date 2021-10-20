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
  <div>
    <label htmlFor="font">
      <span>{font}</span>
      <input
        type="radio"
        name="font"
        value={font}
        onChange={() => onChange(font)}
        {...rest}
      />
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
    <div className="flex-colums" style={{ fontFamily: font }}>
      <div style={{ textAlign: 'center' }}>
        <i>
          Find more fonts at{' '}
          <a
            target="_blank"
            href="https://fonts.google.com/"
            rel="noreferrer"
            style={{ textDecoration: 'underline', color: 'blue' }}
          >
            fonts.google.com
          </a>
          !
        </i>
        <p>
          The currently selected font is{' '}
          <span style={{ textDecoration: 'underline' }}>{font}</span>
        </p>
      </div>
      {loadableFonts.map(f => (
        <RenderRadioButton
          key={f}
          font={f}
          onChange={setFont}
          checked={f === font}
        />
      ))}
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
