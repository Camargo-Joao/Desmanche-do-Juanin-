import React from "react";
import Button from "../layout/ui/Button";
import Input from "../layout/ui/Input.js";

import "./Contato.css";

function Contato() {
  return (
    <div className="main-content">
      <h1 className="title">Fique por dentro de tudo!</h1>
      <h3 className="subtitle">Fale com o Juanin!</h3>
      <form className="formulario">
        <Input type="text" label="Nome:" />

        <Input type="mail" label="E-mail:" />

        <Input type="number" label="Telefone:" />

        <Button path="/agradecimento" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Contato;
