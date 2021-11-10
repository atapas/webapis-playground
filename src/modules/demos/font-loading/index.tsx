import React, { ChangeEvent } from 'react';

import { NotSupported } from 'components';

import run, { hasSupport } from '../../apis/font-loading';

function FontLoading() {
  const [currentFont, setCurrentFont] = React.useState<string>('Roboto');

  if (!hasSupport()) {
    return <NotSupported />;
  }

  const onFontChange = (event: ChangeEvent<HTMLInputElement>) => {
    run(event.target.value);
    setCurrentFont(event.target.value);
  };

  return (
    <div
      className="
        tw-flex
        tw-flex-col
        tw-items-start
      "
    >
      <div className="tw-flex">
        <div>
          <input
            type="radio"
            name="font"
            id="roboto"
            value="Roboto"
            className="
              tw-hidden
            "
            onChange={onFontChange}
          />
          <label
            htmlFor="roboto"
            className={`
              tw-border
              tw-px-4
              tw-py-3
              tw-rounded-tl-lg
              tw-rounded-bl-lg
              tw-cursor-pointer
              tw-text-base
              tw-font-semibold
              ${
                currentFont === 'Roboto'
                  ? `tw-text-white
                     tw-bg-blue-500
                     tw-border-blue-500
                     hover:tw-bg-blue-500
                    `
                  : '`tw-text-gray-700`'
              }
              tw-transition
              tw-ease-in
              tw-duration-300
              hover:tw-bg-blue-50
            `}
          >
            Roboto
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="font"
            id="opensans"
            value="OpenSans"
            className="
              tw-hidden
            "
            onChange={onFontChange}
          />
          <label
            htmlFor="opensans"
            className={`
              tw-border
              tw-border-r-0
              tw-border-l-0
              tw-px-4
              tw-py-3
              tw-cursor-pointer
              tw-text-base
              tw-font-semibold
              ${
                currentFont === 'OpenSans'
                  ? `tw-text-white
                     tw-bg-blue-500
                     tw-border-blue-500
                     hover:tw-bg-blue-500
                    `
                  : '`tw-text-gray-700`'
              }
              tw-transition
              tw-ease-in
              tw-duration-300
              hover:tw-bg-blue-50
            `}
          >
            Open Sans
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="font"
            id="festive"
            value="Festive"
            className="
              tw-hidden
            "
            onChange={onFontChange}
          />
          <label
            htmlFor="festive"
            className={`
              tw-border
              tw-px-4
              tw-py-3
              tw-rounded-tr-lg
              tw-rounded-br-lg
              tw-cursor-pointer
              tw-text-base
              tw-font-semibold
              ${
                currentFont === 'Festive'
                  ? `tw-text-white
                     tw-bg-blue-500
                     tw-border-blue-500
                     hover:tw-bg-blue-500
                    `
                  : '`tw-text-gray-700`'
              }
              tw-transition
              tw-ease-in
              tw-duration-300
              hover:tw-bg-blue-50
            `}
          >
            Festive
          </label>
        </div>
      </div>
      <span
        className="tw-mt-8 tw-prose-lg tw-text-gray-600"
        style={{ fontFamily: currentFont }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquid
        doloremque, nulla animi dolores libero perferendis quas, at nemo
        laudantium laborum aperiam! Libero quaerat quibusdam repudiandae eveniet
        odit quas commodi.
      </span>
    </div>
  );
}

export default FontLoading;
