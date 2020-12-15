import React, { useRef, useEffect } from "react";
import "./Comment.scss";

// import logo from "../../../../apis/logo512.png";

const Comment = ({ author, authorImg, textDisplay, publishedAt }) => {
  const text = useRef(null);

  useEffect(() => {
    text.current.innerHTML = textDisplay;
  }, [text, textDisplay]);

  return (
    <div className="comments__item">
      <div className="comments__image">
        <img className="comments__image__img" src={authorImg} alt={author} />
      </div>
      <div className="comments__details">
        <h3 className="comments__details__author">{author}</h3>
        <p className="comments__details__text" ref={text}>
          {textDisplay}
        </p>
      </div>
    </div>
  );
};

export default Comment;
