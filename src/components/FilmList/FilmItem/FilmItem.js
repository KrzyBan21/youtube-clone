import React from "react";
import "./FilmItem.scss";

import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const FilmItem = ({ url, title, videoId, video, onSelectVideo }) => {
  const history = useHistory();

  const onRedirectToSelectedFilm = () => {
    onSelectVideo(video);
    history.push(`/selected-film/${videoId}`);
  };

  return (
    <div className={`film__item`} onClick={onRedirectToSelectedFilm}>
      <img src={url} alt="test" className="film__img" />
      <div className="film__title">
        <p className="film__text">{title}</p>
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
