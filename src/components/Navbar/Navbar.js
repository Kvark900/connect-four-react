import React, {useContext, useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, useHistory} from "react-router-dom"
import {GlobalContext} from "../../App";

export default function NavbarMenu(props) {
  let {user, updateUserSession} = useContext(GlobalContext);

  useEffect(() => {
    let authUser = JSON.parse(localStorage.getItem("authUser"));
    console.log("From useEffect - setting user to:", authUser);
    updateUserSession(authUser);
  }, []);

  function signOut() {
    updateUserSession(null);
    localStorage.removeItem("authUser");
    window.location.reload();
  }

  function getNavLinks() {
    // console.log("from getAuthLinks() - rendering and user is", user);
    if (user != null)
      return <Nav className="ml-auto pr-5 d-flex flex-row">
        <Nav.Link disabled
                  style={{color: "grey"}}> Welcome {user.displayName}
        </Nav.Link>
        <Nav.Link as={Link}
                  to="/"
                  onClick={async () => await signOut()}
        >Sign out
        </Nav.Link>
      </Nav>;

    else return <Nav className="ml-auto pr-5 d-flex flex-row">
      <Nav.Link as={Link}
                to="/login">Login</Nav.Link>
      <Nav.Link as={Link}
                to="/register">Register</Nav.Link>
    </Nav>
  }

  return (
      <Navbar bg="light"
              expand="lg">
        <Navbar.Brand as={Link}
                      to="/">Connect Four</Navbar.Brand>
        {getNavLinks()}
      </Navbar>
  )
}
