import React from "react";
import { Link } from "react-router-dom"; 
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Catalog from './data/Catalog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Styles</Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/category/hombre">Hombre</Nav.Link> 
              <Nav.Link as={Link} to="/category/mujer">Mujer</Nav.Link> 
              <Nav.Link as={Link} to="/category/ninos">Niños</Nav.Link> 
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;


