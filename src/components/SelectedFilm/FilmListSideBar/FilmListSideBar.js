import React from "react";
import "./FilmListSideBar.scss";

import FilmList from "../../FilmList/FilmList";

const FilmListSideBar = ({ toogleFilms }) => {
  return (
    <div
      className={`film-list-side-bar ${
        toogleFilms ? "film-list-side-bar--mobile-switch" : null
      }`}
    >
      <div className="film-list-side-bar__list">
        <FilmList isSideBar={true} />
      </div>
    </div>
  );
};

export default FilmListSideBar;
