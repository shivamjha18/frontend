import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Header from "./Header";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavWrapper className="navbar nav-bar-expand-sm navbar1 px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="logo" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/register" style={{ color: "white" }} className="ml-auto">
            <ButtonContainer>
              <i class="fa fa-user" aria-hidden="true"></i>
              {/* {auth.currentUser.email} */}
            </ButtonContainer>
          </Link>

          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <i className="fas fa-cart-plus"></i>
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;
