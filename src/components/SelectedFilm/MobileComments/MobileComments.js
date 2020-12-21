import React from "react";
import "./MobileComments.scss";

const MobileComments = ({ onToggle }) => {
  return (
    <div onClick={onToggle} className="mobile">
      Mobile
    </div>
  );
};

export default MobileComments;
