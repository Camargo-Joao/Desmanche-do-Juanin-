import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Pecas from "./components/pages/Pecas";
import Contato from "./components/pages/Contato";
import ProductPage from "./components/pages/ProductPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Compras from "./components/pages/Compras";
import ConclusaoPedido from "./components/pages/ConclusaoPedido";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min_heigth">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pecas">
            <Pecas />
          </Route>
          <Route path="/peca/:userId">
            <ProductPage />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/comprar">
            <Compras />
          </Route>
          <Route path="/finalizar-compra">
            <ConclusaoPedido />
          </Route>
        </Container>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
