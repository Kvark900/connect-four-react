import React, {useEffect, useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, useHistory} from "react-router-dom"

export default function NavbarMenu(props) {
  let [user, setUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    let user = localStorage.getItem("authUser");
    // console.log("From useEffect - setting user to:", user)
    setUser(user);
  }, [user]);

  function signOut() {
    setUser(null);
    localStorage.removeItem("authUser")
    window.location.reload();
  }

  function getAuthLinks() {
    let user = JSON.parse(localStorage.getItem("authUser"));
    // console.log("from getAuthLinks() - rendering and user is", user)
    if (user != null)
      return <Nav className="ml-auto pr-5 d-flex flex-row">
        <Nav.Link disabled style={{color: "grey"}}> Welcome {user.displayName}
        </Nav.Link>
        <Nav.Link as={Link}
                  to="/"
                  onClick={async () => await signOut()}
        >Sign out
        </Nav.Link>
      </Nav>

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
        {getAuthLinks()}
      </Navbar>
  )
}
