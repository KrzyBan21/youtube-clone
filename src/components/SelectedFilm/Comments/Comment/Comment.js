import React from "react";
import "./Comment.scss";

import logo from "../../../../apis/logo512.png";

const Comment = () => {
  return (
    <div className="comments__item">
      <div className="comments__image">
        <img className="comments__image__img" src={logo} alt="test" />
      </div>
      <div className="comments__details">
        <h3 className="comments__details__author">Authoar</h3>
        <p className="comments__details__text">Commenta</p>
      </div>
    </div>
  );
};

export default Comment;
