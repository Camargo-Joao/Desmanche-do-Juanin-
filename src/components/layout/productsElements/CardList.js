import React from "react";
import Card from "./Card";
import "./CardList.css";

function CardList(props) {
  return (
    <div className="main_content">
      <ul className="card_list">
        {props.items.map((prod) => (
          <Card
            id={prod.id}
            image={prod.src}
            name={prod.name}
            description={prod.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
