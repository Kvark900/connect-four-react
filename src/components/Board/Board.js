import React, {useEffect, useState} from 'react';
import './Board.css';
import Column from "./Column/Column";
import Firebase from "../../config/fbConfig";

export default function Board(props) {
  const NUMBER_OF_ROWS = 6;
  const NUMBER_OF_COLUMNS = 7;

  let [state, setState] = useState({
    grid: new Array(NUMBER_OF_COLUMNS)
        .fill(new Array(NUMBER_OF_ROWS)
            .fill(null)),
    playerTurn: 'Red',
    gameMode: '',
    winner: ''
  });

  function playerWins(grid) {
    return winsVertically(grid) ||
        winsHorizontally(grid) ||
        winsDiagonally(grid) ||
        winsDiagonallyM(grid);
  }

  useEffect(() => {
    console.log("Current user is", localStorage.getItem("authUser"));
    let wins = playerWins(state.grid);
    if (wins) alert(`Player ${wins} wins`)
  }, [state.grid]);


  function playMove(columnOrderNum) {
    const gridClone = state.grid.map(arr => arr.slice());
    let column = gridClone[columnOrderNum].reverse();
    let emptyCell = column.indexOf(null);
    if (emptyCell === -1) return;
    column[emptyCell] = state.playerTurn;
    column.reverse();
    setState({
      ...state,
      playerTurn: state.playerTurn === 'Red' ? 'Yellow' : 'Red',
      grid: gridClone
    });
  }

  function winsVertically(grid) {
    for (let c = 0; c < NUMBER_OF_COLUMNS; c++)
      for (let r = 0; r < 4; r++)
        if (fourConnected(grid[c][r], grid[c][r + 1], grid[c][r + 2], grid[c][r + 3]))
          return grid[c][r];
    return false
  }

  function winsHorizontally(grid) {
    for (let r = 0; r < NUMBER_OF_ROWS; r++)
      for (let c = 0; c < 4; c++)
        if (fourConnected(grid[c][r], grid[c + 1][r], grid[c + 2][r], grid[c + 3][r]))
          return grid[c][r];
    return false
  }

  function winsDiagonally(grid) {
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (fourConnected(grid[c][r], grid[c + 1][r + 1], grid[c + 2][r + 2], grid[c + 3][r + 3]))
          return grid[c][r];
    return false
  }

  function winsDiagonallyM(grid) {
    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (fourConnected(grid[c][r], grid[c - 1][r + 1], grid[c - 2][r + 2], grid[c - 3][r + 3]))
          return grid[c][r];
    return false;
  }

  function fourConnected(a, b, c, d) {
    return (a !== null && a === b && a === c && a === d);
  }

  return <div className="game-table">
    {state.grid.map((el, i) =>
        <Column key={i}
                onClick={() => playMove(i)}
                circles={el}/>
    )}
  </div>
}

