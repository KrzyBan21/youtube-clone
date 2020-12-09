import React from "react";
import "./FilmItem.scss";

import logo from "../../../apis/logo.png";

const FilmItem = (props) => {
  return (
    <div className={`film__item film__item--${props.modify}`}>
      <img src={logo} alt="test" className="film__img" />
      <div className="film__title">
        <p className="film__text">
          To jest nowy film erer ewrwer werwer ewrwer ewrwer asfaf asfa faf asfa
          asfasf asa asfa af asf asf afas asf asf asf afafas fas fasfasf asfaf
        </p>
      </div>
    </div>
  );
};

export default FilmItem;
