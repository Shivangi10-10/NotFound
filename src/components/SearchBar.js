import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = ({ placeholder, value, onChange }) => {
 return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className='search-icon'/>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
 );
};

export default SearchBar;
