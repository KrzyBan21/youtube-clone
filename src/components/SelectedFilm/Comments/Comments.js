import React from "react";
import "./Comments.scss";

import Comment from "./Comment/Comment";

const Comments = () => {
  return (
    <div className='comments'>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
