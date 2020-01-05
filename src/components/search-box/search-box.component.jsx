import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    // onChange = jsx syntax => SYNTHETIC EVENT from React ('fake' event instructiong react to update DOM by itself - scheaduled at the best time)
    // setState is an ASYNC F
  />
);
