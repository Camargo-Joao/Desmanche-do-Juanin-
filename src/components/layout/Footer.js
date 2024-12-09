import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li><FaGithub className="link"/></li>
        <li><FaLinkedin className="link"/></li>
        <li><FaWhatsapp className="link"/></li>
      </ul>
    </footer>
  );
}

export default Footer;
