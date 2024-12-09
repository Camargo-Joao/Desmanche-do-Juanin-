import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductList from "../productItem/ProductList"


const PRODUCTS = [
  {
    id: "Lanterna dianteira Fiat Uno 1980",
    name: "Lanterna dianteira Fiat Uno 1980",
    description: "Localizada na parte trazeira do carro",
    src: "/products/lanterna1.jpg",
    preco: "560",
  },
  {
    id: "Lanterna dianteira Porche Ventana",
    name: "Lanterna dianteira Porche Ventana",
    description: "Localizada na parte trazeira do carro",
    src: "/products/lanterna2.jpg",
    preco: "560",
  },
  {
    id: "Lanterna dianteira Fiat uno 1980",
    name: "Lanterna dianteira Fiat uno 1980",
    description: "Localizada na parte trazeira do carro",
    src: "/products/lanterna3.jpg",
    preco: "780",
  },
  {
    id: "Motor ford Carreira 2010",
    name: "Motor ford Carreira 2010",
    description: "Localizada na parte trazeira do carro",
    src: "/products/motor2.jpg",
    preco: "2300",
  },
  {
    id: "Motor Fiat pálio 2014",
    name: "Motor Fiat pálio 2014",
    description: "Localizada na parte trazeira do carro",
    src: "/products/motor3.jpg",
    preco: "3890",
  },
  {
    id: "Porta ford Focus 2013",
    name: "Porta ford Focus 2013",
    description: "Localizada na parte trazeira do carro",
    src: "/products/porta1.jpg",
    preco: "1450",
  },
  {
    id: "Porta Chevrolet camargo 1970",
    name: "Porta Chevrolet camargo 1970",
    description: "Muito chique",
    src: "/products/porta2.jpg",
    preco: "890",
  },
  {
    id: "Porta Kombi Clássica 1945",
    name: "Porta Kombi Clássica 1945",
    description: "Lutou no fim da Segunda Guerra",
    src: "/products/porta3.jpg",
    preco: "1200",
  },
];

const ProductSelectedData = () => {
  const userId = useParams().userId;
  const loadedProducts = PRODUCTS.filter((product) => product.id === userId);
  return <ProductList product={loadedProducts} />;
};

export default ProductSelectedData;
