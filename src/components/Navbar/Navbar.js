import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom"

export default function NavbarMenu(props) {
  return (
      <Navbar bg="light"
              expand="lg">
        <Navbar.Brand as={Link} to="/">Connect Four</Navbar.Brand>
        <Nav className="ml-auto pr-5 d-flex flex-row">
          <Nav.Link as={Link}
                    to="/login">Login</Nav.Link>
          <Nav.Link as={Link}
                    to="/register">Register</Nav.Link>
        </Nav>
      </Navbar>
  )
}
