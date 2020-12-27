import React from "react";
import "./MobileSwitcher.scss";
import { ImFilm } from "react-icons/im";
import { BiCommentDetail } from "react-icons/bi";

const MobileSwitcher = ({ onToggle, toogleCommentsOrFilms }) => {
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

export default MobileSwitcher;
