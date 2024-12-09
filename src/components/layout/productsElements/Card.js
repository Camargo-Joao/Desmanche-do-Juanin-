import React from "react";
import Image from "../Image";
import "./Card.css";
import Button from "../ui/Button";

function Card({ image, name, description, id }) {
  return (
    <div className="product_card">
      <ul>
        <li>
          <Image src={image} alt={name} className="small" />
        </li>
        <li>{name}</li>
        <li>{description}</li>
      </ul>
      <Button path={`/peca/${id}`}>Disponível</Button>
    </div>
  );
}

export default Card;
