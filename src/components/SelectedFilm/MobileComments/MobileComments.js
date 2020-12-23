import React from "react";
import "./MobileComments.scss";
import { ImFilm } from "react-icons/im";
import { BiCommentDetail } from "react-icons/bi";

const MobileComments = ({ onToggle, toogleCommentsOrFilms }) => {
  return (
    <div onClick={onToggle} className="mobile">
      <ImFilm
        className={`mobile__icon mobile__film ${
          toogleCommentsOrFilms ? "mobile__film--animate" : ""
        }`}
      />
      <BiCommentDetail
        className={`mobile__icon  mobile__comment ${
          toogleCommentsOrFilms ? "" : "mobile__comment--animate"
        }`}
      />
    </div>
  );
};

export default MobileComments;
