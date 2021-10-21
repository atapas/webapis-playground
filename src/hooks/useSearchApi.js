import { useEffect, useState } from 'react';

// import data from json
import { getAllDemos } from 'utils/data/data-access';

export const useSearchApi = () => {
  const [demos, setDemos] = useState(getAllDemos());
  const [loading, setLoading] = useState();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let allDemos = getAllDemos();

    if (searchText) {
      const lowerSearchText = searchText.toLowerCase();
      allDemos = allDemos.filter(demo =>
        demo.title?.toLowerCase().includes(lowerSearchText)
      );
    }

    setLoading(false);
    setDemos(allDemos);
  }, [searchText]);

  return {
    demos,
    loading,
    searchText,
    setSearchText,
    setLoading,
  };
};
