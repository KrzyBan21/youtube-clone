import React from "react";
import "./SelectedFilm.scss";

import { connect } from "react-redux";

const SelectedFilm = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe allowFullScreen src={videoSrc} title={video.snippet.title} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    video: state.filmList.video,
  };
};

export default connect(mapStateToProps)(SelectedFilm);
