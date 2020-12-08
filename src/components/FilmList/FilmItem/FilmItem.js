import React from "react";
import "./FilmItem.scss";

const FilmItem = (props) => {
  return <div className={`film__item film__item--${props.modify}`}>Film Item</div>;
};

export default FilmItem;
