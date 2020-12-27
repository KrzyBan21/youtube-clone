import * as actionTypes from "../actions/actionTypes";
import { updateObject, updateArray } from "../utils";

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  films: [],
  video: null,
  text: "",
  nextPageToken: "",
};

const getFilmsStart = (state, action) => {
  if (action.isMoreFilms) {
    const objectToUpdate = { isLoadingMore: true, error: null };
    return updateObject(state, objectToUpdate);
  } else {
    const objectToUpdate = {
      isLoading: true,
      error: null,
      nextPageToken: action.pageToken,
    };
    return updateObject(state, objectToUpdate);
  }
};

const getFilmsSuccess = (state, action) => {
  if (action.isMoreFilms) {
    const filmsArray = updateArray(state.films, action.films);
    const objectToUpdate = {
      isLoadingMore: false,
      films: filmsArray,
      nextPageToken: action.pageToken,
    };
    return updateObject(state, objectToUpdate);
  } else {
    const objectToUpdate = {
      isLoading: false,
      films: action.films,
      nextPageToken: action.pageToken,
    };
    return updateObject(state, objectToUpdate);
  }
};

const getFilmsFail = (state, action) => {
  const objectToReturn = {
    isLoading: false,
    isLoadingMore: false,
    error: action.error,
  };

  return updateObject(state, objectToReturn);
};

const selectFilm = (state, action) => {
  const objectToReturn = { video: action.video };
  return updateObject(state, objectToReturn);
};

const setSearchedText = (state, action) => {
  const objectToUpdate = { text: action.text };
  return updateObject(state, objectToUpdate);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILMS_START:
      return getFilmsStart(state, action);
    case actionTypes.GET_FILMS_SUCCESS:
      return getFilmsSuccess(state, action);
    case actionTypes.GET_FILMS_FAIL:
      return getFilmsFail(state, action);
    case actionTypes.SELECT_FILM:
      return selectFilm(state, action);
    case actionTypes.SET_SEARCHED_TEXT:
      return setSearchedText(state, action);
    default:
      return state;
  }
};

export default reducer;
