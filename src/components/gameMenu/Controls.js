import React from "react";


export default function Controls(props) {

  return (
      <>
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
      </>
  )

}
