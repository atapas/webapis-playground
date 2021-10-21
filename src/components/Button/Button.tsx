import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-props';

export interface ButtonProps<Element extends ElementType> {
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
   * Render as `any` HTMLElement
   */
  as?: Element;

  /**
   * Render `children` nodes
   */
  children: ReactNode;
}

const Button = <Element extends ElementType = 'button'>({
  children,
  as,
  className,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps<Element> & ComponentPropsWithoutRef<Element>) => {
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
          tw-bg-blue-500
          tw-transition
          tw-duration-100
          tw-ease-in
          tw-appearance-none
          tw-select-none
          tw-align-middle
          focus:tw-ring-4
          focus:tw-ring-blue-300
          focus:tw-outline-none
          active:tw-bg-blue-800
          hover:tw-bg-blue-600
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
