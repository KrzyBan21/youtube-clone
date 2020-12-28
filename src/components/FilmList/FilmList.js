import React, { useEffect } from "react";
import "./FilmList.scss";
import FilmItem from "./FilmItem/FilmItem";

import { connect } from "react-redux";
import * as actions from "../../store/actions/";

import Spinner from "../UI/Spinner/Spinner";

const FilmList = ({
  onGetFilms,
  filmList,
  text,
  nextPageToken,
  isLoading,
  isLoadingMore,
  isSideBar,
  toogleFilms,
}) => {
  useEffect(() => {
    window.onscroll = function () {
      //  int totalPageHeight
      let totalPageHeight = document.body.scrollHeight;
      // console.log(totalPageHeight);

      //  int scrollPoint
      let scrollPoint = window.scrollY + window.innerHeight;
      // console.log(scrollPoint);
      // check if we hit the bottom of the page
      if (Math.ceil(scrollPoint) >= totalPageHeight && !toogleFilms) {
        onGetFilms(text, nextPageToken);
        // console.log("scroll");
      }
    };

    let scrollHeight = document.querySelector("body").scrollHeight;

    let clientHeight = document.querySelector("body").clientHeight;

    if (clientHeight >= scrollHeight && nextPageToken) {
      onGetFilms(text, nextPageToken);
    }

    return () => {
      window.onscroll = null;
    };
  }, [onGetFilms, text, nextPageToken, toogleFilms]);

  useEffect(() => {
    onGetFilms(text);
  }, [onGetFilms, text]);

  const filmListToShow = filmList.map((film, index) => {
    return (
      <FilmItem
        key={film.id.videoId + "_" + index}
        title={film.snippet.title}
        url={film.snippet.thumbnails.medium.url}
        videoId={film.id.videoId}
        video={film}
        isSideBar={isSideBar}
      />
    );
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="film__spinner">
          <Spinner />
        </div>
      ) : (
        <div className={`film ${isSideBar ? "film--side__bar" : ""}`}>
          {filmListToShow}
        </div>
      )}
      {isLoadingMore ? (
        <div className="film__spinner">
          <Spinner />
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    filmList: state.filmList.films,
    text: state.filmList.text,
    nextPageToken: state.filmList.nextPageToken,
    isLoading: state.filmList.isLoading,
    isLoadingMore: state.filmList.isLoadingMore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFilms: (searchText, nextPageToken) =>
      dispatch(actions.getFilms(searchText, nextPageToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
