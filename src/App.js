import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </>
  );
}

export default App;
