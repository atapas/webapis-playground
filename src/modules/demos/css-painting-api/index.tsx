import { IconButton } from '@/components/IconButton';
import { ImHeart } from 'react-icons/im';
import { GiPlainCircle } from 'react-icons/gi';
import run, { hasSupport } from '../../apis/css-painting-api';
import { useState } from 'react';

function CssPaintingApi() {
  const [changeShape, setChangeShape] = useState<
    'heartPattern' | 'circlePattern'
  >('heartPattern');

  const mystyle = {
    width: '200px',
    height: '200px',
  };

  if (!hasSupport) {
    return <h1>Unsupported</h1>;
  } else {
    run();
  }

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-center md:tw-items-start
      "
    >
      <div id="js-api--fullscreen" className=" tw-mb-4">
        <section
          id="screen"
          style={{ ...mystyle, backgroundImage: `paint(${changeShape})` }}
        />
      </div>
      <label htmlFor="js-url--input">Click on the shape:-</label>
      <div
        className="
        tw-flex
        tw-items-center md:tw-items-start
      "
      >
        <IconButton
          icon={<ImHeart />}
          ariaLabel="heartPattern"
          onClick={() => {
            setChangeShape('heartPattern');
          }}
        />
        <IconButton
          icon={<GiPlainCircle />}
          ariaLabel="circlePattern"
          onClick={() => {
            setChangeShape('circlePattern');
          }}
        />
      </div>
    </div>
  );
}

export default CssPaintingApi;
