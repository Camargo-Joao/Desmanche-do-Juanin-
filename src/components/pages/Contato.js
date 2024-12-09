import React from "react";
import Button from "../layout/ui/Button";
import Input from "../layout/ui/Input.js";

import "./Contato.css";

function Contato() {
  return (
    <div className="corpo">
      <div className="main-content">
        <h1>Fique por dentro de tudo!</h1>
        <h3>Fale com o Juanin!</h3>
        <div>
          <form>
            <Input type="text" label="Nome:" />

            <Input type="mail" label="E-mail:" />

            <Input type="number" label="Telefone:" />

            <Button path="/">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
