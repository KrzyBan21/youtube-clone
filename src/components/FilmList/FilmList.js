import React, { useEffect } from "react";
import "./FilmList.scss";
import FilmItem from "./FilmItem/FilmItem";

import { connect } from "react-redux";
import * as actions from "../../store/actions/";

const FilmList = ({ onGetFilms, searchText, filmList }) => {
  useEffect(() => {
    onGetFilms(searchText);
    // console.log(filmList);
  }, [onGetFilms, searchText]);

  const filmListToShow = filmList.map((film) => {
    return (
      <FilmItem
        key={film.id.videoId}
        title={film.snippet.title}
        url={film.snippet.thumbnails.medium.url}
      />
    );
  });

return <div className="film">{filmListToShow}</div>;
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
