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
  (props, ref) => {
    const { value, onClear, clearLabel = 'Clear' } = props;

    return (
      <Input
        type="text"
        renderPrefix={() => <FiSearch />}
        renderSuffix={props =>
          value && onClear && clearLabel ? (
            <IconButton
              icon={<GrFormClose />}
              ariaLabel={clearLabel}
              onClick={onClear}
              {...props}
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
