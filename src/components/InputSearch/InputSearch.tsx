import React from 'react';

import { Input, InputProps, IconButton } from '..';

import { FiSearch } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
export interface InputSearchProps extends InputProps {
  /**
   * Callback function when the user clears the field.
   */
  onClear?: () => void;

  /**
   * Acessible text
   */
  clearLabel?: string;
}

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  ({ value, onClear, clearLabel = 'Clear', ...props }, ref) => {
    return (
      <Input
        type="text"
        renderPrefix={() => <FiSearch />}
        renderSuffix={renderProps =>
          value && onClear && clearLabel ? (
            <IconButton
              icon={<GrFormClose />}
              ariaLabel={clearLabel}
              onClick={onClear}
              {...renderProps}
            />
          ) : null
        }
        value={value}
        {...props}
        ref={ref}
      />
    );
  }
);

InputSearch.displayName = 'InputSearch';

export default InputSearch;
