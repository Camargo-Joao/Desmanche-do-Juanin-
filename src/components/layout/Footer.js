import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="https://github.com/Camargo-Joao" target="blank">
            <FaGithub className="link" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-camargo-298701307/" target="blank">
            <FaLinkedin className="link" />
          </a>
        </li>
        <li>
          <a href="/">
            <FaWhatsapp className="link" />
          </a>
        </li>
      </ul>
      <h4 className="dev">Developed by João Pedro Camargo</h4>
    </footer>
  );
}

export default Footer;
