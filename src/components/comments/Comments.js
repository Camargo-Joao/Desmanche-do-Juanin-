import React, { useState } from "react";

import NewComment from "./NewComment";
import CommentList from "./CommentList";
import "./Comments.css";

const Form = () => {
  const [Comments, setNewComment] = useState([]);

  const addNewCommnetHandler = (newComment) => {
    setNewComment((prevComment) => prevComment.concat(newComment));
  };

  return (
    <React.Fragment>
      <NewComment onAddComment={addNewCommnetHandler} />
      <CommentList comments={Comments} />
    </React.Fragment>
  );
};

export default Form;
