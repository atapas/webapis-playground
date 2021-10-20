import React, { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-props';
export interface IconButtonProps<Element extends ElementType> {
  /**
   * Acessible label
   */
  ariaLabel: string;

  /**
   * Render `as` any tag
   */
  as?: Element;

  /**
   * Render icon
   */
  icon: ReactNode;

  /**
   * Render `children` nodes
   */
  children?: ReactNode;
}

const IconButton = <Element extends ElementType = 'button'>({
  children,
  icon,
  as,
  className,
  ...props
}: IconButtonProps<Element> & ComponentPropsWithoutRef<Element>) => {
  let element = children || icon;

  const child = React.isValidElement(element)
    ? React.cloneElement(element as any, {
        'aria-hidden': true,
        focusable: false,
      })
    : null;

  let Component = as || 'button';

  return (
    <Component
      className={cx(
        `
          tw-inline-flex
          tw-items-center
          tw-justify-center
          tw-px-3
          tw-h-10
          tw-text-base
          tw-font-semibold 
          tw-text-gray-500
          tw-whitespace-nowrap
          tw-rounded-md 
          tw-bg-transparent
          tw-transition
          tw-duration-200
          tw-ease-in
          tw-appearance-none
          tw-select-none
          tw-align-middle
          focus:tw-ring-4
          focus:tw-ring-blue-200
          focus:tw-outline-none
          active:tw-bg-gray-200
          hover:tw-bg-gray-100
          disabled:tw-opacity-50
          disabled:tw-pointer-events-none
          disabled:tw-select-none
        `,
        className
      )}
      {...filterDOMProps(props)}
    >
      <span className="tw-inline-flex tw-self-center tw-flex-shrink-0">
        {child}
      </span>
    </Component>
  );
};

export default IconButton;
