import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  comments: [],
  nextPageToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILMS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        nextPageToken: "",
      };
    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.comments,
        nextPageToken: action.nextPageToken,
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
