import React, { useState } from 'react';

const SearchBar = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    performSearch(searchTerm);
  };

  const performSearch = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredData);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;