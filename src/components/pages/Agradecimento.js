import React from "react";
import Button from "../layout/ui/Button";

import "./Agradecimento.css";

function Agradecimento() {
  return (
    <div className="conteudo">
      <h1 className="title">Obrigado por nos cotactar!</h1>
      <h3 className="subtitle">Retornaremos em breve!</h3>
      <Button path="/" type="submit">Voltar para o início</Button>
    </div>
  );
}

export default Agradecimento;
