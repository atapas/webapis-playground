import { useEffect, useState } from 'react';

// import data from json
import { getAllDemos } from 'utils/data/data-access';

// Demo component
import { Demo } from '..';
import { SearchBox } from './SearchBox';

const NOT_FOUND_TEXT = 'No matched demo found';

const App = () => {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchAPI = (searchText) => {
    const lowerSearchText = searchText.toLowerCase();
    setLoading(true);
    let searchedDemos = getAllDemos();
    if (searchText) {
      searchedDemos = searchedDemos
        .filter(demo => demo.title?.toLowerCase().includes(lowerSearchText));
    }

    setDemos(searchedDemos);
    setLoading(false);
  };

  return (
    <>
      <SearchBox onSearch={searchAPI} />
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-p-10px">
        {(!loading && demos.length > 0) ? (
          demos.map((demo, index) => <Demo demo={demo} key={index} />)
        ) : (
          <div className="not-found">{NOT_FOUND_TEXT}</div>
        )}
      </div>
    </>
  );
};

export default App;
