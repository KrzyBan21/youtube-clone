import React from "react";
import classes from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className={classes.search}>
      <input
        className={classes["search__input"]}
        type="text"
        placeholder="Search..."
      />
      <button className={classes["search__button"]}>
        <BsSearch className={classes["search__icon"]} />
      </button>
    </div>
  );
};

export default SearchInput;
