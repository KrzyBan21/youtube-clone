import * as actionTypes from "./actionTypes";
import youtube from "../../apis/youtubeApi";

const getFilmsStart = () => {
  return {
    type: actionTypes.GET_FILMS_START,
  };
};

const getFilmsSuccess = (films) => {
  return {
    type: actionTypes.GET_FILMS_SUCCESS,
    films,
  };
};

const getFilmsFail = (error) => {
  return {
    type: actionTypes.GET_FILMS_FAIL,
    error,
  };
};

export const getFilms = (searchText) => {
  return async (dispatch) => {
    try {
      dispatch(getFilmsStart());
      const response = await youtube.get("/search", {
        params: {
          q: searchText,
        },
      });
      dispatch(getFilmsSuccess(response.data.items));
    } catch (e) {
      dispatch(getFilmsFail(e.message));
    }
  };
};
