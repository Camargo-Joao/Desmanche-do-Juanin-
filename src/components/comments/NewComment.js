import React, { useState } from "react";

import './NewComment.css'

const NewComment = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addNewCommentHandler = (event) => {
    event.preventDefault();

    const newComment = {
      text: enteredText,
    };

    setEnteredText("");

    props.onAddComment(newComment);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="comment_form" onSubmit={addNewCommentHandler}>
      <input placeholder="Escreva um comentário" type="text" value={enteredText} onChange={textChangeHandler} required/>
      <button type="submit">Publicar</button>
    </form>
  );
};

export default NewComment;
