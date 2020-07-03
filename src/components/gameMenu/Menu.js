import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";


export default function Menu(props) {
  let [state, setState] = useState(1);

  function getBody() {
    switch (state) {
      case 1 : return <div id="card-body">
        <div className="custom-control custom-radio">
          <input type="radio"
                 id="human-radio"
                 name="new-game-radio"
                 value="VSHUMAN"
                 className="custom-control-input"/>
          <label className="custom-control-label"
                 htmlFor="human-radio">Against Human
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input type="radio"
                 id="computer-radio"
                 name="new-game-radio"
                 value="VSCOMPUTER"
                 className="custom-control-input"/>
          <label className="custom-control-label"
                 htmlFor="computer-radio">Against Computer
          </label>
        </div>
        <div className="custom-control custom-radio player-radios">
          <input type="radio"
                 id="yellow-player-radio"
                 disabled="disabled"
                 name="player-radio"
                 value="YELLOW"
                 className="custom-control-input"/>
          <label className="custom-control-label"
                 htmlFor="yellow-player-radio">As Yellow
          </label>
        </div>
        <div className="custom-control custom-radio player-radios">
          <input type="radio"
                 disabled="disabled"
                 id="red-player-radio"
                 name="player-radio"
                 value="RED"
                 className="custom-control-input"/>
          <label className="custom-control-label"
                 htmlFor="red-player-radio">As Red
          </label>
        </div>
        <button type="submit"
                id="new-game-button"
                className="btn btn-primary my-2">New Game
        </button>
      </div>;
      case 2 : return <div id="card-body">
        <p>
          Connect Four (also known as Captain's Mistress, Four Up, Plot Four, Find Four, Four in a
          Row, Four in a Line, Drop Four, and Gravitrips (in Soviet Union)) is a two-player connection
          game in which the players first choose a color and then take turns dropping one colored disc
          from the top into a seven-column, six-row vertically suspended grid. The pieces fall
          straight down, occupying the lowest available space within the column. The objective of the
          game is to be the first to form a horizontal, vertical, or diagonal line of four of one's
          own discs.
        </p>
      </div>
      default : return ""
    }
  }

  return (
      <div id="game-command-panel">
        <Card style={{width: "500px"}}>
          <Card.Header>
            <Nav variant="tabs"
                 defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link onClick={() => setState(1)} href="#first">New Game</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setState(2)} href="#link">Instruction</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setState(3)} href="#disabled"
                          disabled>
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
