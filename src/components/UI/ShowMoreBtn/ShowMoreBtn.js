import React from "react";
import "./ShowMoreBtn.scss";

const ShowMoreBtn = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="show-btn">
      {children}
    </button>
  );
};

export default ShowMoreBtn;
