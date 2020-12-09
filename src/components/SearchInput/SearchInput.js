import React, { useState } from "react";
import classes from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ onSetInput }) => {
  const [inputData, setInputData] = useState("");

  const onInputData = (e) => {
    setInputData(e.target.value);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    onSetInput(inputData);
  };

  return (
    <form className={classes.search} onSubmit={onSubmitData}>
      <input
        className={classes["search__input"]}
        type="text"
        placeholder="Search..."
        value={inputData}
        onChange={onInputData}
      />
      <button className={classes["search__button"]}>
        <BsSearch className={classes["search__icon"]} />
      </button>
    </form>
  );
};

export default SearchInput;
