import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.69,13.679l-3.25-3.25a5.791,5.791,0,1,0-1.315,1.17l3.322,3.322a.37.37,0,0,0,.524,0l.719-.718A.371.371,0,0,0,14.69,13.679ZM4.137,9.595a4.026,4.026,0,1,1,5.8-.125l-.24.24a4.014,4.014,0,0,1-5.563-.114Z" />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Search;
