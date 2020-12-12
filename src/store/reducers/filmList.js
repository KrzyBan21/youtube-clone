import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  films: [],
  video: null,
  text: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILMS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.GET_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.films,
      };
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
