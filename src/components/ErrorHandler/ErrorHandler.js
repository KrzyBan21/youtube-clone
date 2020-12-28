import React from "react";
import "./ErrorHandler.scss";
import image from "../../img/error.svg";

import { useHistory } from "react-router-dom";

const ErrorHandler = ({ errorArray }) => {
  const history = useHistory();

  const redirectToHomePage = () => {
    history.push("/");
  };

  const errorsToShow = errorArray.map((error) => {
    if (error) {
      return (
        <p key={error} className="global-error__text">
          Error message: {error}
        </p>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="global-error">
      <img className="global-error__img" src={image} alt="error" />
      <h2 className="global-error__title">An error was occured!</h2>
      {errorsToShow}
      <p onClick={redirectToHomePage} className="global-error__link">
        &larr; Get back to the home page
      </p>
    </div>
  );
};

export default ErrorHandler;
