import React, { useEffect } from "react";
import "./Comments.scss";

import Comment from "./Comment/Comment";
import ShowMoreBtn from "../../UI/ShowMoreBtn/ShowMoreBtn";
import Spinner from "../../UI/Spinner/Spinner";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/";

// import { useError } from "../../../hooks/useError";

const Comments = ({
  onGetComments,
  videoId,
  comments,
  nextPageToken,
  isLoading,
  isLoadingMore,
  toogleComments,
  // error,
}) => {
  useEffect(() => {
    onGetComments(videoId);
  }, [onGetComments, videoId]);

  let commentsToShow = [];
  //  if (!isLoading) {
  commentsToShow = comments.map((comment) => {
    const {
      authorDisplayName,
      authorProfileImageUrl,
      textDisplay,
      publishedAt,
    } = comment.snippet.topLevelComment.snippet;

    return (
      <Comment
        key={comment.id}
        author={authorDisplayName}
        authorImg={authorProfileImageUrl}
        textDisplay={textDisplay}
        publishedAt={publishedAt}
      />
    );
  });
  // }

  const onLoadMoreComments = () => {
    onGetComments(videoId, nextPageToken);
  };

  // useError(error, "/error");

  return (
    <div
      className={`comments ${toogleComments ? "" : "comments--mobile-switch"}`}
    >
      {isLoading ? <Spinner /> : commentsToShow}
      <div className="comments__btn">
        {isLoadingMore ? (
          <Spinner />
        ) : (
          <ShowMoreBtn onClick={onLoadMoreComments}>
            Show more comments
          </ShowMoreBtn>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
    nextPageToken: state.comments.nextPageToken,
    isLoading: state.comments.isLoading,
    isLoadingMore: state.comments.isLoadingMore,
    // error: state.comments.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetComments: (videoId, pageToken) =>
      dispatch(actions.getComments(videoId, pageToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
