import React from 'react';

const PLACEHOLDER = 'Search by API names';

export const SearchBox = ({ searchText, setSearchText, setLoading }) => {
  const onSearchTextChange = event => {
    setLoading(true);
    setSearchText(event.target.value);
  };

  const clearSearch = () => setSearchText('');

  return (
    <div className="search-box">
      {searchText && (
        <span className="clear-icon" onClick={clearSearch}>
          X
        </span>
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
