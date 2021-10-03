import { ChangeEvent } from 'react';

import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

export interface SearchProps {
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ onSearch }: SearchProps) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        // eslint-disable-next-line react/no-children-prop
        children={<Icon as={FaSearch} color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search by API names"
        onChange={onSearch}
      />
    </InputGroup>
  );
}

export default Search;
