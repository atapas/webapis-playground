import React, { useEffect, useState } from 'react';

const PLACEHOLDER = 'Search by API names';

export const SearchBox = ({ onSearch }) => {

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  const onSearchTextChange = (event) => setSearchText(event.target.value);

  const clearSearch = () => setSearchText('');

  return (
    <div className="search-box">
      {searchText && (
        <span className="clear-icon" onClick={clearSearch}>X</span>
      )}
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