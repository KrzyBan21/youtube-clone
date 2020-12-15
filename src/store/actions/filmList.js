import * as actionTypes from "./actionTypes";
import youtube from "../../apis/youtubeApi";

const getFilmsStart = (isMoreFilms) => {
  return {
    type: actionTypes.GET_FILMS_START,
    isMoreFilms,
  };
};

const getFilmsSuccess = (films, pageToken, isMoreFilms) => {
  return {
    type: actionTypes.GET_FILMS_SUCCESS,
    films,
    pageToken,
    isMoreFilms,
  };
};

const getFilmsFail = (error) => {
  return {
    type: actionTypes.GET_FILMS_FAIL,
    error,
  };
};

export const getFilms = (searchText, pageToken = null) => {
  return async (dispatch) => {
    try {
      let isMoreFilms;
      if (pageToken) {
        isMoreFilms = true;
      } else {
        isMoreFilms = false;
      }

      dispatch(getFilmsStart(isMoreFilms));

      const response = await youtube.get("/search", {
        params: {
          q: searchText,
          pageToken,
        },
      });
      console.log(response);
      dispatch(
        getFilmsSuccess(
          response.data.items,
          response.data.nextPageToken,
          isMoreFilms
        )
      );
    } catch (e) {
      dispatch(getFilmsFail(e.message));
    }
  };
};

export const selectFilm = (video) => {
  sessionStorage.setItem("videoId", video.id.videoId);
  sessionStorage.setItem("title", video.snippet.title);
  sessionStorage.setItem("description", video.snippet.description);

  return {
    type: actionTypes.SELECT_FILM,
    video,
  };
};

export const setSearchedText = (text) => {
  return {
    type: actionTypes.SET_SEARCHED_TEXT,
    text,
  };
};
