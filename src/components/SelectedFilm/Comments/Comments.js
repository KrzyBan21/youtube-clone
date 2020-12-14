import React, { useEffect } from "react";
import "./Comments.scss";

import Comment from "./Comment/Comment";
import ShowMoreBtn from "../../UI/ShowMoreBtn/ShowMoreBtn";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/";

const Comments = ({
  onGetComments,
  videoId,
  comments,
  nextPageToken,
  isLoading,
}) => {
  useEffect(() => {
    onGetComments(videoId);
  }, [onGetComments, videoId]);

  const commentsToShow = comments.map((comment) => {
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

  return (
    <div className="comments">
      {isLoading ? "...Loading" : commentsToShow}
      <div className="comments__btn">
        <ShowMoreBtn>Show more comments</ShowMoreBtn>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments.comments,
    nextPageToken: state.comments.nextPageToken,
    isLoading: state.comments.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetComments: (videoId, pageToken) =>
      dispatch(actions.getComments(videoId, pageToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
