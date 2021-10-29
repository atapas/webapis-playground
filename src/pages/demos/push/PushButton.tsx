import { MouseEventHandler } from 'react';
import CheckSVG from './CheckSVG';

interface IPushButton {
  disabledColor?: string;
  disabled?: boolean;
  name: string;
  on?: boolean;
  onClick?: MouseEventHandler;
}

const PushButton = ({
  disabledColor = 'tw-bg-gray-500 hover:tw-bg-gray-500',
  disabled,
  name,
  on,
  onClick,
}: IPushButton) => {
  let _className = 'tw-w-64';
  if (on) _className += ' tw-bg-green-600 hover:tw-bg-green-600';
  if (disabled) _className += ' tw-cursor-not-allowed ' + disabledColor;
  return (
    <div className="tw-relative">
      <button onClick={onClick} disabled={disabled} className={_className}>
        {name}
      </button>
      {on && (
        <div
          className="tw-absolute tw-right-2 tw-top-1/2"
          style={{ transform: 'translateY(-50%)' }}
        >
          <CheckSVG className="tw-text-white" />
        </div>
      )}
    </div>
  );
};

export default PushButton;
