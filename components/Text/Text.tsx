import React, { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-dom-props';

export interface TextProps<Element extends ElementType> {
  /**
   * The `font-size` css property
   */
  size:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';

  /**
   * The `font-weight` css property
   */
  bold?: boolean;

  /**
   * Set a custom className
   */
  className?: string;

  /**
   * Render `children` nodes
   */
  children: ReactNode;
}

const Text = <Element extends ElementType = 'span'>(
  props: TextProps<Element> & ComponentPropsWithoutRef<Element>
) => {
  let { children, as, className, size = 'base', bold } = props;

  let Component = as || 'span';

  return (
    <Component
      className={cx(
        `
          tw-text-${size}
          tw-whitespace-nowrap
        `,
        {
          'tw-font-bold': bold,
        },
        className
      )}
      {...filterDOMProps(props)}
    >
      {children}
    </Component>
  );
};

Text.displayName = 'Text';

export default Text;
