import React, { useEffect, useRef } from "react";
import "./FilmItem.scss";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const FilmItem = ({ url, title, videoId, video, onSelectVideo, isSideBar }) => {
  const history = useHistory();
  const titleRef = useRef(null);

  const onRedirectToSelectedFilm = () => {
    onSelectVideo(video);
    history.push(`/selected-film/${videoId}`);
  };

  useEffect(() => {
    titleRef.current.innerHTML = title;
  }, [titleRef, title]);

  <div className={`film ${isSideBar ? "film--side__bar" : ""}`}></div>;

  return (
    <div
      className={`film__item ${isSideBar ? "film__item--side__bar" : ""}`}
      onClick={onRedirectToSelectedFilm}
    >
      <img
        src={url}
        alt="video"
        className={`film__img ${isSideBar ? "film__img--side__bar" : ""}`}
      />
      <div
        className={`film__title ${isSideBar ? "film__title--side__bar" : ""}`}
      >
        <p ref={titleRef} className="film__text">
          {title}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectVideo: (video) => dispatch(actions.selectFilm(video)),
  };
};

export default connect(null, mapDispatchToProps)(FilmItem);
