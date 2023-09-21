import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Styles</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Hombre</Nav.Link>
              <Nav.Link href="#">Mujer</Nav.Link>
              <Nav.Link href="#">Niños</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ItemListContainer greeting="Bienvenido a Styles" />
    </>
  );
}

export default NavBar;

