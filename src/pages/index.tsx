import React, { ChangeEvent } from 'react';

import { Demo } from 'types/demo';

import { InputSearch, Card } from 'components';

import { useSearchApi } from 'hooks/useSearchApi';

const NOT_FOUND_TEXT = 'No matched demo found';

export default function Home() {
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
            tw-mt-4
            md:tw-mt-8
            tw-grid
            tw-grid-cols-1
            tw-gap-4
            md:tw-grid-cols-2
            lg:tw-grid-cols-3
            xl:tw-grid-cols-4
          "
        >
          {demos.map((demo: Demo, index: number) => (
            <Card data={demo} key={index} />
          ))}
        </div>
      ) : (
        <div className="not-found">{NOT_FOUND_TEXT}</div>
      )}
    </>
  );
}
