import React from "react";
import "./FilmList.scss";
import FilmItem from "./FilmItem/FilmItem";

const FilmList = () => {
  return (
    <div className='film'>
      <FilmItem modify={1} />
      <FilmItem modify={2} />
      <FilmItem modify={3} />
      <FilmItem modify={1} />
      <FilmItem modify={2} />
      <FilmItem modify={3} />
      <FilmItem modify={1} />
      <FilmItem modify={2} />
      <FilmItem modify={3} />
      <FilmItem modify={1} />
      <FilmItem modify={2} />
      <FilmItem modify={3} />
      <FilmItem modify={1} />
      <FilmItem modify={2} />
      <FilmItem modify={3} />
      <FilmItem modify={1} />
      <FilmItem modify={2} />
      <FilmItem modify={3} />
    </div>
  );
};

export default FilmList;
