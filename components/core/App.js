import React from 'react';

// Demo component
import { Demo } from '..';
import { SearchBox } from './SearchBox';

// useSearchApi hook
import { useSearchApi } from '../../hooks/useSearchApi';

const NOT_FOUND_TEXT = 'No matched demo found';

const App = () => {
  const { demos, loading, searchText, setSearchText, setLoading } =
    useSearchApi();

  return (
    <>
      <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        setLoading={setLoading}
      />
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-p-10px">
        {!loading && demos.length > 0 ? (
          demos.map((demo, index) => <Demo demo={demo} key={index} />)
        ) : (
          <div className="not-found">{NOT_FOUND_TEXT}</div>
        )}
      </div>
    </>
  );
};

export default App;
