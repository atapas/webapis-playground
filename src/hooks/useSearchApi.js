import { useEffect, useState } from 'react';

import { getAllDemos } from 'services/demo';

export const useSearchApi = () => {
  const [demos, setDemos] = useState(getAllDemos);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let allDemos = getAllDemos;

    if (searchText) {
      let lowerSearchText = searchText.toLowerCase();

      allDemos = allDemos.filter(demo =>
        demo.title?.toLowerCase().includes(lowerSearchText)
      );
    }

    setDemos(allDemos);
  }, [searchText]);

  return {
    demos,
    searchText,
    setSearchText,
  };
};
