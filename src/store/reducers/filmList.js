import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  films: [],
  video: null,
  text: "",
  nextPageToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILMS_START:
      if (action.isMoreFilms) {
        return {
          ...state,
          isLoadingMore: true,
          error: null,
        };
      } else {
        return {
          ...state,
          isLoading: true,
          error: null,
          nextPageToken: action.pageToken,
        };
      }

    case actionTypes.GET_FILMS_SUCCESS:
      if (action.isMoreFilms) {
        return {
          ...state,
          isLoadingMore: false,
          films: [...state.films, ...action.films],
          nextPageToken: action.pageToken,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          films: action.films,
          nextPageToken: action.pageToken,
        };
      }

    case actionTypes.GET_FILMS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.SELECT_FILM:
      return {
        ...state,
        video: action.video,
      };
    case actionTypes.SET_SEARCHED_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default reducer;
