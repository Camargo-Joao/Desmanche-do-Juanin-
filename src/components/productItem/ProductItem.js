import React from "react";

import Button from "../layout/ui/Button";
import Image from "../layout/Image";
import Comments from "../comments/Comments";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="conteudo">
      <h1 className="title">{props.id}</h1>
      <ul>
        <li>
          <div className="image">
            <Image src={props.image} alt={props.name} />
          </div>
        </li>
        <li>{props.name}</li>
        <li>{props.description}</li>
      </ul>
      <Button path="/comprar" type="submit">Comprar Agora R${props.preco},00</Button>

      <h3>Comentários</h3>
      <Comments />
    </div>
  );
}

export default ProductItem;
