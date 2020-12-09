import React, { useEffect } from "react";
import "./FilmList.scss";
import FilmItem from "./FilmItem/FilmItem";

import { connect } from "react-redux";
import * as actions from "../../store/actions/";

const FilmList = ({ onGetFilms, searchText, filmList }) => {
  useEffect(() => {
    onGetFilms(searchText);
  }, [onGetFilms, searchText]);

  return (
    <div className="film">
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

const mapStateToProps = (state) => {
  return {
    filmList: state.filmList.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFilms: (searchText) => dispatch(actions.getFilms(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
