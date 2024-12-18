import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <div>
      <ul>
        {props.product.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.src}
            name={item.name}
            description={item.description}
            preco={item.preco}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
