import React from "react";
import "./FilmListSideBar.scss";

import FilmItemSideBar from "./FilmItemSideBar/FilmItemSideBar";
import FilmList from "../../FilmList/FilmList";

const FilmListSideBar = () => {
  return (
    <div className="film-list-side-bar">
      <div className="film-list-side-bar__list">
        <FilmList isSideBar={true} />
      </div>
    </div>
  );
};

export default FilmListSideBar;
