import React from "react";
import IconList from "../../iconlist/IconList";
import "./SearchButton.css"; 

const SearchButton = ({ onClick }) => {
  return (
    <button className="search-button" onClick={onClick}>
      <IconList iconName="search" /><span>Search</span>
    </button>
  );
};

export default SearchButton;
