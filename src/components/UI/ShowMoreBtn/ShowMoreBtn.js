import React from "react";
import "./ShowMoreBtn.scss";

const ShowMoreBtn = ({ children }) => {
  return <button className='show__btn'>{children}</button>;
};

export default ShowMoreBtn;
