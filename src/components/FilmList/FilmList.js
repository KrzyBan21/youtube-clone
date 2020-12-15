import React, { useEffect } from "react";
import "./FilmList.scss";
import FilmItem from "./FilmItem/FilmItem";

import { connect } from "react-redux";
import * as actions from "../../store/actions/";

import ShowMoreBtn from "../UI/ShowMoreBtn/ShowMoreBtn";

const FilmList = ({
  onGetFilms,
  filmList,
  text,
  nextPageToken,
  isLoadingMore,
}) => {
  // useEffect(() => {
  //   window.onscroll = function () {
  //     // @var int totalPageHeight
  //     let totalPageHeight = document.body.scrollHeight;
  //     console.log(totalPageHeight);

  //     // @var int scrollPoint
  //     let scrollPoint = window.scrollY + window.innerHeight;
  //     console.log(scrollPoint);
  //     // check if we hit the bottom of the page
  //     if (Math.round(scrollPoint) >= Math.round(totalPageHeight, 0)) {
  //       alert("gowno");
  //       //onGetFilms(text, nextPageToken);
  //     }
  //   };
  // }, [onGetFilms, text, nextPageToken]);

  useEffect(() => {
    onGetFilms(text);
    // console.log(filmList);
  }, [onGetFilms, text]);

  // useEffect(() => {
  //   let scrollHeight = document.querySelector("body").scrollHeight;

  //   let clientHeight = document.querySelector("body").clientHeight;

  //   if ((clientHeight > scrollHeight) && nextPageToken) {
  //     onGetFilms(text, nextPageToken);
  //   }
  // }, [onGetFilms, text, nextPageToken]);

  const filmListToShow = filmList.map((film) => {
    return (
      <FilmItem
        key={film.id.videoId}
        title={film.snippet.title}
        url={film.snippet.thumbnails.medium.url}
        videoId={film.id.videoId}
        video={film}
      />
    );
  });

  const onLoadMoreFilms = () => {
    onGetFilms(text, nextPageToken);
  };

  return (
    <React.Fragment>
      <div className="film">{filmListToShow}</div>
      <div>
        <ShowMoreBtn onClick={onLoadMoreFilms}>Load more films</ShowMoreBtn>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    filmList: state.filmList.films,
    text: state.filmList.text,
    nextPageToken: state.filmList.nextPageToken,
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
