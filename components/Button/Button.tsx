import React, { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-dom-props';

import { Colors } from '../../types/tailwind';

export interface ButtonProps<Element extends ElementType> {
  /**
   * Render as `any` HTMLElement
   */
  as?: Element;

  /**
   * Set a custom className
   */
  className?: string;

  /**
   * The `background-color` css property
   */
  color?: Colors;

  /**
   * Render an `icon`
   * on left side of the `Button`
   */
  leftIcon?: ReactNode;

  /**
   * Render an `icon`
   * on right side of the `Button`
   */
  rightIcon?: ReactNode;

  /**
   * Render `children` nodes
   */
  children: ReactNode;
}

const Button = <Element extends ElementType = 'button'>(
  props: ButtonProps<Element> & ComponentPropsWithoutRef<Element>
) => {
  let { children, as, className, leftIcon, rightIcon, color = 'blue' } = props;

  let Component = as || 'button';

  return (
    <Component
      className={cx(
        `
          tw-inline-flex
          tw-items-center
          tw-justify-center

          tw-px-4
          tw-h-10

          tw-text-base
          tw-font-semibold 
          tw-text-white
          tw-whitespace-nowrap

          tw-rounded-md 
          tw-bg-${color}-500

          transition
          tw-duration-300
          ease-in

          tw-appearance-none
          tw-select-none
          tw-align-middle

          focus:tw-ring-4
          focus:tw-ring-${color}-200
          focus:tw-outline-none

          active:tw-bg-${color}-900
          hover:tw-bg-${color}-600

          disabled:tw-opacity-50
          disabled:tw-pointer-events-none
          disabled:tw-select-none
        `,
        className
      )}
      {...filterDOMProps(props)}
    >
      {leftIcon && (
        <span className="tw-inline-flex tw-self-center tw-flex-shrink-0 tw-mr-2">
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className="tw-inline-flex tw-self-center tw-flex-shrink-0 tw-ml-2">
          {rightIcon}
        </span>
      )}
    </Component>
  );
};

Button.displayName = 'Button';

export default Button;
