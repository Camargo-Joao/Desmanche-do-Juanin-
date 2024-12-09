import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../img/juanin_logo.png"
import "./Home.css";

function Home() {
  return (
    <div className="main_content">
      <div>
        <h1>Desmanche do Juanin</h1>
        <p>
          Encontre suas peças <Link to="/pecas" className="action">Já!</Link>
        </p>
        <img src={logo} alt="Logo Home" />
      </div>
    </div>
  );
}

export default Home;
