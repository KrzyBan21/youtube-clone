import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  comments: [],
  nextPageToken: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS_START:
      if (action.isMoreComments) {
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
          nextPageToken: "",
        };
      }

    case actionTypes.GET_COMMENTS_SUCCESS:
      if (action.isMoreComments) {
        return {
          ...state,
          isLoadingMore: false,
          comments: [...state.comments, ...action.comments],
          nextPageToken: action.nextPageToken,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          comments: action.comments,
          nextPageToken: action.nextPageToken,
        };
      }

    case actionTypes.GET_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoadingMore: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
