import React from "react";
import "./FilmItem.scss";

// import logo from "../../../apis/logo.png";

const FilmItem = ({ title, url }) => {
  return (
    <div className={`film__item`}>
      <img src={url} alt="test" className="film__img" />
      <div className="film__title">
        <p className="film__text">{title}</p>
      </div>
    </div>
  );
};

export default FilmItem;
