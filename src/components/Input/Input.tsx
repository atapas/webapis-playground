import React, { FC, InputHTMLAttributes, Ref } from 'react';

import cx from 'clsx';
// @ts-ignore
import filterDOMProps from 'filter-react-props';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Render an `prefix`
   * on left side of the `Input`
   */
  renderPrefix?: FC<{ className?: string }>;

  /**
   * Render an `suffix`
   * on right side of the `Input`
   */
  renderSuffix?: FC<{ className?: string }>;

  /**
   * The ref to the HTML DOM element
   */
  ref: Ref<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { renderPrefix: Prefix, renderSuffix: Suffix, className, ...props },
    ref
  ) => {
    const prefix = Prefix && <Prefix />;
    const suffix = Suffix && <Suffix />;

    return (
      <div className="tw-relative">
        {prefix && (
          <div
            className="
            tw-absolute
            tw-top-0
            tw-left-0
            tw-w-10
            tw-h-10
            tw-flex
            tw-items-center
            tw-justify-center
            tw-text-gray-400
          "
          >
            {prefix}
          </div>
        )}
        <input
          ref={ref}
          className={cx(
            `
            tw-w-full
            tw-border-gray-200
            tw-rounded-md
            tw-placeholder-gray-400
            tw-transition
            tw-duration-200
            tw-ease-in
          `,
            [prefix ? 'tw-pl-10' : 'tw-pl-4'],
            [suffix ? 'tw-pr-10' : 'tw-pr-4'],
            className
          )}
          {...filterDOMProps(props)}
        />
        {suffix && (
          <div
            className="
            tw-absolute
            tw-top-0
            tw-right-0
            tw-w-10
            tw-h-10
            tw-flex
            tw-items-center
            tw-justify-center
            tw-text-gray-400
          "
          >
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
