import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import favicon from "../assets/images/favicon.ico";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <link rel="icon" href={favicon} />
        <Container>
          <Navbar.Brand href="/">TANDEM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/country">Country</Nav.Link>
              {/* <Nav.Link href="/category">Category</Nav.Link>
              <Nav.Link href="/video">Video</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
