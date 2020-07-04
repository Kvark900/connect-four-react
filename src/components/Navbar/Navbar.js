import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


export default function NavbarMenu(props) {
  return <Navbar bg="light"
                 expand="lg">
    <Navbar.Brand href="#home">Connect Four</Navbar.Brand>
    <Nav className="ml-auto pr-5 d-flex flex-row">
      <Nav.Link href="#home">Login</Nav.Link>
      <Nav.Link href="#link">Register</Nav.Link>
    </Nav>
  </Navbar>
}
