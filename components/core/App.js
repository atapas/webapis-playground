import React, { useEffect, useState } from 'react';

// import data from json
import { getAllDemos } from 'utils/data/data-access';

// Demo component
import { Demo } from '..';
import { SearchBox } from './SearchBox';

const App = () => {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allDemos = getAllDemos();
    console.log({ allDemos });
    setDemos(allDemos);
    setLoading(false);
  }, []);

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
      <div className="demo-list">
        {(!loading && demos.length) > 0 &&
        demos.map((demo, index) => <Demo demo={demo} key={index} />)}
      </div>
    </>
  );
};

export default App;
