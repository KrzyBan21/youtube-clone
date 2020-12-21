import React, { useState } from "react";
import "./SelectedFilm.scss";

import Comments from "./Comments/Comments";
import FilmListSideBar from "./FilmListSideBar/FilmListSideBar";
import MobileComments from "./MobileComments/MobileComments";

import { connect } from "react-redux";

const SelectedFilm = ({ video }) => {
  let videoId = "";
  let title = "";
  let description = "";

  const [toogleCommentsOrFilms, setToogleCommentsOrFilms] = useState(true);

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

  const onToggleCommentsOrFilms = () => {
    setToogleCommentsOrFilms(!toogleCommentsOrFilms);
  };

  return (
    <div className="selected-film">
      <div className="selected-film__iframe">
        <div className="ui embed">
          <iframe allowFullScreen src={videoSrc} title={title} />
        </div>
        <div className="selected-film__details">
          <h2 className="selected-film__details__title">{title}</h2>
          <p className="selected-film__details__text">{description}</p>
        </div>
      </div>
      <MobileComments onToggle={onToggleCommentsOrFilms} />
      <Comments videoId={videoId} toogleComments={toogleCommentsOrFilms}/>
      <FilmListSideBar toogleFilms={toogleCommentsOrFilms}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.filmList.video,
  };
};

export default connect(mapStateToProps)(SelectedFilm);
