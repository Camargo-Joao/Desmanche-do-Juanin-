import { Link } from "react-router-dom";
import logo from "../../img/juanin_logo.png";
import "./Navbar.css";

function Navbar() {

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Desmanche" className="navbar_logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pecas">Peças</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
