import React from "react";
import "./SelectedFilm.scss";

import Comments from "./Comments/Comments";
import FilmListSideBar from "./FilmListSideBar/FilmListSideBar";

import { connect } from "react-redux";

const SelectedFilm = ({ video }) => {
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
      </div>
        <Comments videoId={videoId} />
      <FilmListSideBar />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.filmList.video,
  };
};

export default connect(mapStateToProps)(SelectedFilm);
