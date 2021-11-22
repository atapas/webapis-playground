import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-props';

export interface TagProps<Element extends ElementType> {
  /**
   * Render an `icon`
   * on left side of the `Tag`
   */
  leftIcon?: ReactNode;

  /**
   * Render an `icon`
   * on right side of the `Tag`
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

const Tag = <Element extends ElementType = 'span'>({
  children,
  as,
  className,
  leftIcon,
  rightIcon,
  ...props
}: TagProps<Element> & ComponentPropsWithoutRef<Element>) => {
  let Component = as || 'span';

  return (
    <Component
      className={cx(
        `
          tw-inline-flex
          tw-items-center
          tw-justify-center
          tw-py-1
          tw-px-2
          tw-text-xs
          tw-font-bold 
          tw-text-white
          tw-whitespace-nowrap
          tw-uppercase
          tw-rounded-md 
          tw-bg-gray-500
          tw-transition
          tw-duration-100
          tw-ease-in
          tw-appearance-none
          tw-select-none
          tw-align-middle
          active:tw-bg-gray-800
          hover:tw-bg-gray-600
        `,
        className
      )}
      {...filterDOMProps(props)}
    >
      {leftIcon && (
        <span className="tw-inline-flex tw-self-center tw-flex-shrink-0 tw-mr-1">
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className="tw-inline-flex tw-self-center tw-flex-shrink-0 tw-ml-1">
          {rightIcon}
        </span>
      )}
    </Component>
  );
};

Tag.displayName = 'Tag';

export default Tag;
