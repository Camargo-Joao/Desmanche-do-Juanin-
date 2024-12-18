import React from "react";

import "./ConclusaoPedido.css";
import Button from "../layout/ui/Button";

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function ConclusaoPedido() {
  return (
    <div className="conteudo">
      <h1 className="title">Seu pedido foi agendado!</h1>
      <h3 className="subtitle-2">
        Período estimado de chedada - {random(6, 15)} dias úteis
      </h3>
      <div className="buttons">
        <Button path="/">Voltar para o menu</Button>
        <Button path="/pecas">Realizar outra compra</Button>
      </div>
    </div>
  );
}

export default ConclusaoPedido;
