import React, { useEffect } from "react";
import "./SelectedFilm.scss";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Comments from "./Comments/Comments";

const SelectedFilm = ({ video, onGetComments }) => {
  let videoId = "";
  let title = "";
  let description = "";

  if (!video) {
    if (sessionStorage.getItem("videoId")) {
      videoId = sessionStorage.getItem("videoId");
      title = sessionStorage.getItem("title");
      description = sessionStorage.getItem("description");
    }
  } else {
    videoId = video.id.videoId;
    title = video.snippet.title;
    description = video.snippet.description;
  }

  // useEffect(() => {
  //   onGetComments(videoId);
  // }, [videoId]);

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="selected__film">
      <div className="selected__film__iframe">
        <div className="ui embed">
          <iframe allowFullScreen src={videoSrc} title={title} />
        </div>
        <div className="selected__film__details">
          <h2 className="selected__film__details__title">{title}</h2>
          <p className="selected__film__details__text">{description}</p>
        </div>
        <Comments />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.filmList.video,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetComments: (videoId, pageToken) =>
      dispatch(actions.getComments(videoId, pageToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilm);
