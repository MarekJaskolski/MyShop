import React, { useState, useEffect } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

const Navigation = () => {
  return (
    <nav className=" main-navbar">
      <div className="col-xs-2 col-sm-2">
        <span>
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </span>
      </div>
      <ul className="col-xs-2 col-sm-2">
        <li>
          <Link to="/">Products</Link>
        </li>
      </ul>
      <div className="col-xs-8 col-sm-8 cart-box">
        <Link to="/cart">
          <ButtonContainer>
            <span className="">
              <i className="fas fa-cart-plus"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
