import React, {useContext, useEffect, useState} from 'react';
import './Board.css';
import Column from "./Column/Column";
import {GameContext} from "../../App";
import Arrow from "./Arrow/Arrow";

export default function Board(props) {
  let {grid, playMove, showArrow, toggleShowArrow, gameEnabled} = useContext(GameContext);

  return <div>
    <div className="game-table">
      {grid.map((el, i) =>
          <div style={{display: "flex", flexDirection: "column"}}>
            <Arrow color={(showArrow === i && gameEnabled) ? "black" : "transparent"}/>
            <Column key={i}
                    onMouseOver={() => { toggleShowArrow(i) }}
                    onMouseLeave={() => { toggleShowArrow(-i)}}
                    onClick={() => playMove(i)}
                    discs={el}/>
          </div>
      )}
    </div>
  </div>
}

