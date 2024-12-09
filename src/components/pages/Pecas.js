import React from "react";
import "./Pecas.css";
import ProductsData from "../data/ProductsData";

function Pecas() {
  return (
    <div className="main_content">
      <h1>Encontre suas peças!</h1>
      <ProductsData />
    </div>
  );
}

export default Pecas;
