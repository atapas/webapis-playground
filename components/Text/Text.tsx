import React, { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-dom-props';

import { ClassColor } from '../../types/tailwind';

export interface TextProps<Element extends ElementType> {
  /**
   * The `font-size` css property
   */
  size?:
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
   * The `background-color` css property
   */
  color?: ClassColor;

  /**
   * The `font-weight` css property
   */
  bold?: boolean;

  /**
   * Clamp lines
   */
  noOfLines?: number;

  /**
   * Render as `any` HTMLElement
   */
  as?: Element;

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
  let {
    children,
    as,
    className,
    size = 'base',
    color = 'black',
    noOfLines,
    bold,
  } = props;

  let Component = as || 'span';

  return (
    <Component
      className={cx(
        `
          tw-text-${size}
          tw-text-${color}
        `,
        {
          [`tw-line-clamp-${noOfLines}`]: noOfLines,
        },
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
