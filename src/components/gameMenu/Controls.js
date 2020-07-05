import React, {useContext, useRef, useState} from "react";
import {GameContext} from "../../App";


export default function Controls(props) {
  let {grid, gameEnabled, enableGame, gameMode, changeGameMode} = useContext(GameContext);
  let vsHumanRadio = useRef();
  let vsComputer = useRef();

  function handleClick() {
    let checked = getCheckedGameMode();
    console.log(vsHumanRadio.current);
    console.log("Checked radio is: ", checked);
    enableGame(checked !== "")
    changeGameMode(checked)
  }

  function getCheckedGameMode() {
    if (vsHumanRadio.current.checked)
      return vsHumanRadio.current.value
    else if (vsComputer.current.checked)
      return vsComputer.current.value
    return ""
  }

  return (
      <>
        <div className="custom-control custom-radio">
          <input ref={vsHumanRadio}
                 type="radio"
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
                 ref={vsComputer}
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
                onClick={handleClick}
                id="new-game-button"
                className="btn btn-primary my-2">New Game
        </button>
      </>
  )

}
