import React from "react";
import Input from "../layout/ui/Input";
import Button from "../layout/ui/Button";

import "./Compras.css";

function Compras() {
  return (
    <div className="main-content">
      <h1 className="title">Tela de Pagamento</h1>
      <h3 className="subtitle">Só aceitamos cartão de crédito!</h3>
      <form className="formulario">
        <Input type="text" label="Número do cartão:" />

        <Input type="text" label="Nome Impresso no cartão:" />

        <Input type="text" label="Validade:" />

        <Input type="text" label="CVV:" />

        <Button path="/finalizar-compra">Concluir pedido</Button>
      </form>
    </div>
  );
}

export default Compras;
