import * as actionTypes from "./actionTypes";
import youtube from "../../apis/youtubeApi";

const getCommentsStart = (isMoreComments) => {
  return {
    type: actionTypes.GET_COMMENTS_START,
    isMoreComments,
  };
};

const getCommentsSuccess = (comments, nextPageToken, isMoreComments) => {
  return {
    type: actionTypes.GET_COMMENTS_SUCCESS,
    comments,
    nextPageToken,
    isMoreComments,
  };
};

const getCommentsFail = (error) => {
  return {
    type: actionTypes.GET_COMMENTS_FAIL,
    error,
  };
};

export const getComments = (videoId, pageToken = null) => {
  return async (dispatch) => {
    try {
      let isMoreComments;
      if (pageToken) {
        isMoreComments = true;
      } else {
        isMoreComments = false;
      }

      dispatch(getCommentsStart(isMoreComments));

      const comments = await youtube.get("/commentThreads", {
        params: {
          videoId,
          pageToken,
        },
      });

      dispatch(
        getCommentsSuccess(
          comments.data.items,
          comments.data.nextPageToken,
          isMoreComments
        )
      );
      // console.log(comments);
    } catch (e) {
      dispatch(getCommentsFail(e.message));
      // console.log(e.message);
    }
  };
};
