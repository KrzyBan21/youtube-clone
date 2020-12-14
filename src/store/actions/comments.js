import * as actionTypes from "./actionTypes";
import youtube from "../../apis/youtubeApi";

const getCommentsStart = () => {
  return {
    type: actionTypes.GET_COMMENTS_START,
  };
};

const getCommentsSuccess = (comments, nextPageToken) => {
  return {
    type: actionTypes.GET_COMMENTS_SUCCESS,
    comments,
    nextPageToken,
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
      dispatch(getCommentsStart());

      const comments = await youtube.get("/commentThreads", {
        params: {
          videoId,
          pageToken,
        },
      });

      dispatch(
        getCommentsSuccess(comments.data.items, comments.data.nextPageToken)
      );
      console.log(comments);
    } catch (e) {
      dispatch(getCommentsFail(e.message));
      // console.log(e.message);
    }
  };
};
