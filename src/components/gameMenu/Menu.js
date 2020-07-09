import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Controls from "./Controls";


export default function Menu() {
  let [state, setState] = useState(1);

  function getBody() {
    switch (state) {
      case 1 :
        return <div id="card-body">
          <Controls/>
        </div>;
      case 2:
        return <div id="card-body">
          Navigate to <a href="" onClick={() => {
            document.getElementsByClassName("nav-link")[2].classList.add("active");
            document.getElementsByClassName("nav-link")[3].classList.remove("active");
            setState(1)
        }}> Game Menu </a> and click New Game button after selecting game mode.
        </div>;
      case 3 :
        return <div id="card-body">
          <p>
            Connect Four (also known as Captain's Mistress, Four Up, Plot Four, Find Four, Four in a
            Row, Four in a Line, Drop Four, and Gravitrips (in Soviet Union)) is a two-player connection
            game in which the players first choose a color and then take turns dropping one colored disc
            from the top into a seven-column, six-row vertically suspended grid.
            <br/>
            <br/>
            The pieces fall straight down, occupying the lowest available space within the column. The objective of the
            game is to be the first to form a horizontal, vertical, or diagonal line of four of one's
            own discs.
          </p>
        </div>;
      default :
        return ""
    }
  }

  return (
      <div id="game-command-panel">
        <Card style={{width: "500px"}}>
          <Card.Header>
            <Nav variant="tabs"
                 defaultActiveKey="#1">
              <Nav.Item>
                <Nav.Link onClick={() => setState(1)}
                          href="#1">New Game</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setState(2)}
                          href="#2">Instruction</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setState(3)}
                          href="#3" >
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            {getBody()}
          </Card.Body>
        </Card>
      </div>);
}
