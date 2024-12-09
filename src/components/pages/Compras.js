import React from "react";
import Input from "../layout/ui/Input";
import Button from "../layout/ui/Button";

import "./Comprar.css";

function Compras() {
  return (
    <div className="corpo">
      <div className="main-content">
        <h1>Tela de Pagamento</h1>
        <h3>Só aceitamos cartão de crédito!</h3>
        <div>
          <form>
            <Input type="text" label="Número do cartão:" />

            <Input type="text" label="Nome Impresso no cartão:" />

            <Input type="text" label="Validade:" />

            <Input type="text" label="CVV:" />

            <Button path="/finalizar-compra">Concluir pedido</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Compras;
