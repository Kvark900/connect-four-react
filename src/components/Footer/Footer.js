import React from "react";
import "./Footer.css"
import Container from "reactstrap/es/Container";
import Navbar from "react-bootstrap/Navbar";


export default function Footer() {
  return <div className="fixed-bottom">
    <Navbar bg="light"
            expand="lg" >
      <Container >
        <p className="text-center w-100 text-black-50">
          Copyright © Žigović Kemal 2020, email: kemal.zigovic@hotmail.com <br/>
          Professor: prof. dr. Adis Alihodžić
        </p>
      </Container>
    </Navbar>
  </div>

}
