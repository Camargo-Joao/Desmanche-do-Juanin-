import React from "react";
import Image from "../layout/Image.js";

import "./CommentList.css";

const CommentList = (props) => {
  return (
    <div className="comment_list">
      {props.comments.map((comments) => {
        return (
          <ul className="comment_list_content">
            <div className="perfil">
              <li>Nome: Usuário</li>
              <div className="perfil_image">
                <Image src="/products/perfil.jpg" />
              </div>
            </div>
            <li>Comentário: {comments.text}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default CommentList;
