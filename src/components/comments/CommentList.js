import React from "react";

import "./CommentList.css";

const CommentList = (props) => {
  return (
    <div className="comment">
      {props.comments.map((comments) => {
        return (
          <ul>
            <li>Nome: Usuário</li>
            <li>Comentário: {comments.text}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default CommentList;
