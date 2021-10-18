import React, { ChangeEvent } from 'react';

// Demo component
import { Demo } from '..';
import { InputSearch } from 'components';

import { useSearchApi } from '../../hooks/useSearchApi';

const NOT_FOUND_TEXT = 'No matched demo found';

const App = () => {
  const { demos, searchText, setSearchText } = useSearchApi();

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchText(value);
  };

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <>
      <InputSearch
        placeholder="Search by API names"
        value={searchText}
        onClear={handleClear}
        onChange={handleChange}
      />

      {demos.length ? (
        <div
          className="
            tw-w-full
            tw-max-w-container
            tw-m-auto
            tw-mt-8
            tw-grid
            tw-grid-cols-1
            tw-gap-4
            md:tw-grid-cols-2
            lg:tw-grid-cols-5
          "
        >
          {demos.map((demo, index) => (
            <Demo demo={demo} key={index} />
          ))}
        </div>
      ) : (
        <div className="not-found">{NOT_FOUND_TEXT}</div>
      )}
    </>
  );
};

export default App;
