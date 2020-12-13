import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILMS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.comments,
      };
    case actionTypes.GET_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;