import React from "react";
import CardList from "../layout/productsElements/CardList";

function ProductsData() {
  const PRODUCTS = [
    {
      id: "Lanterna dianteira Fiat Uno 1980",
      name: "Lanterna dianteira Fiat Uno 1980",
      description: "Localizada na parte dianteira do carro",
      src: "/products/lanterna1.jpg",
    },
    {
      id: "Lanterna dianteira Porche Ventana",
      name: "Lanterna dianteira Porche Ventana",
      description: "Localizada na parte dianteira do carro",
      src: "/products/lanterna2.jpg",
    },
    {
      id: "Lanterna dianteira Fiat uno 1980",
      name: "Lanterna dianteira Fiat uno 1980",
      description: "Localizada na parte dianteira do carro",
      src: "/products/lanterna3.jpg",
    },
    {
      id: "Motor ford Carreira 2010",
      name: "Motor ford Carreira 2010",
      description: "Localizado debaixo do capô do carro",
      src: "/products/motor2.jpg",
    },
    {
      id: "Motor Fiat pálio 2014",
      name: "Motor Fiat pálio 2014",
      description: "Localizado debaixo do capô do carro",
      src: "/products/motor3.jpg",
    },
    {
      id: "Porta ford Focus 2013",
      name: "Porta ford Focus 2013",
      description: "Localizada nas laterais do carro",
      src: "/products/porta1.jpg",
    },
    {
      id: "Porta Chevrolet camargo 1970",
      name: "Porta Chevrolet camargo 1970",
      description: "Localizada nas laterais do carro",
      src: "/products/porta2.jpg",
    },
    {
      id: "Porta Kombi Clássica 1945",
      name: "Porta Kombi Clássica 1945",
      description: "Localizada nas laterais do carro",
      src: "/products/porta3.jpg",
    },
  ];

  return <CardList items={PRODUCTS} />;
}

export default ProductsData;
