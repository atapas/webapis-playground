import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-dom-props';

import { SpacingValue } from '../../types/tailwind';

export interface SpacerProps {
  /**
   * The `height, width` css property
   */
  size?: SpacingValue;

  /**
   * Define if `Spacer`
   * is vertical or horizontal
   */
  orientation?: 'x' | 'y';
}

function Spacer(props: SpacerProps) {
  let { size = 'px', orientation = 'y' } = props;

  return (
    <div
      className={cx(orientation === 'y' ? `tw-h-${size}` : `tw-w-${size}`)}
    />
  );
}

Spacer.displayName = 'Spacer';

export default Spacer;
