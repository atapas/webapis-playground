import React, { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

import { Button, ButtonProps } from '.';

export interface IconButtonProps<Element extends ElementType>
  extends Omit<ButtonProps<Element>, 'children' | 'leftIcon' | 'rightIcon'> {
  /**
   * Acessible label
   */
  'aria-label': string;

  /**
   * Render icon
   */
  icon: ReactNode;

  /**
   * Render `children` nodes
   */
  children?: ReactNode;
}

const IconButton = <Element extends ElementType = 'button'>(
  props: IconButtonProps<Element> & ComponentPropsWithoutRef<Element>
) => {
  let { children, icon } = props;
  let element = children || icon;

  const child = React.isValidElement(element)
    ? React.cloneElement(element as any, {
        'aria-hidden': true,
        focusable: false,
      })
    : null;

  return (
    <Button {...props}>
      <span className="tw-inline-flex tw-self-center tw-flex-shrink-0">
        {child}
      </span>
    </Button>
  );
};

export default IconButton;
