import React, {useContext, useEffect, useState} from 'react';
import './Board.css';
import Column from "./Column/Column";
import {GameContext} from "../../App";

export default function Board(props) {
  let {
    grid, updateGrid,
    gameEnabled, enableGame,
    gameMode, changeGameMode,
    playerTurn, changePlayerTurn,
    playMove
  } = useContext(GameContext);

  return <div className="game-table">
    {grid.map((el, i) =>
        <Column key={i}
                onClick={() => playMove(i)}
                circles={el}/>
    )}
  </div>
}

