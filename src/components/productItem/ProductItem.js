import React from "react";

import Button from "../layout/ui/Button";
import Image from "../layout/Image";
import Comments from "../comments/Comments"
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <div className="main-content-products">
      <div className="info-box">
        <h1>{props.id}</h1>
        <ul>
          <li>
            <div className="image">
              <Image src={props.image} alt={props.name} />
            </div>
          </li>
          <li>{props.name}</li>
          <li>{props.description}</li>
        </ul>
        <Button path="/comprar">Comprar Agora R${props.preco},00</Button>
      </div>
      <h3>Comentários</h3>
      <Comments />
    </div>
  );
}

export default ProductItem;
