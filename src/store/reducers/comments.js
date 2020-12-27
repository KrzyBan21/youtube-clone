import * as actionTypes from "../actions/actionTypes";
import { updateObject, updateArray } from "../utils";

const initialState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  comments: [],
  nextPageToken: "",
};

const getCommentsStart = (state, action) => {
  if (action.isMoreComments) {
    const updateComments = { isLoadingMore: true, error: null };
    return updateObject(state, updateComments);
  } else {
    const updateComments = { isLoading: true, error: null, nextPageToken: "" };
    return updateObject(state, updateComments);
  }
};

const getCommentsSuccess = (state, action) => {
  if (action.isMoreComments) {
    const updateCommentsArray = updateArray(state.comments, action.comments);
    const objectToUpdate = {
      isLoadingMore: false,
      comments: updateCommentsArray,
      nextPageToken: action.nextPageToken,
    };
    return updateObject(state, objectToUpdate);
  } else {
    const objectToUpdate = {
      isLoading: false,
      comments: action.comments,
      nextPageToken: action.nextPageToken,
    };
    return updateObject(objectToUpdate);
  }
};

const getCommentsFail = (state, action) => {
  const objectToUpdate = {
    isLoading: false,
    isLoadingMore: false,
    error: action.error,
  };
  return updateObject(state, objectToUpdate);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS_START:
      return getCommentsStart(state, action);
    case actionTypes.GET_COMMENTS_SUCCESS:
      return getCommentsSuccess(state, action);
    case actionTypes.GET_COMMENTS_FAIL:
      return getCommentsFail(state, action);
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
