import React, { useEffect, useState } from 'react';

const PLACEHOLDER = 'API Search';

export const SearchBox = ({ onSearch }) => {

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  const onSearchTextChange = (event) => setSearchText(event.target.value);

  const clearSearch = () => setSearchText('');

  return (
    <div className="search-box">
      <span className="clear-icon" onClick={clearSearch}>X</span>
      <input
        type="text"
        className="searchbox"
        placeholder={PLACEHOLDER}
        value={searchText}
        onChange={onSearchTextChange}
      />
    </div>
  );
};