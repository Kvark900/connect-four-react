import React, {useEffect, useState} from 'react';
import './Board.css';
import Column from "./Column/Column";

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

  function playerWins(bs) {
    return winsVertically(bs) ||
        winsHorizontally(bs) ||
        winsDiagonally(bs) ||
        winsDiagonallyM(bs);
  }

  useEffect(() => {
    let wins = playerWins(state.grid);
    if (wins) alert(`Player ${wins} wins`)
  }, [state.grid]);


  function makeMove(columnOrderNum) {
    const gridCopy = state.grid.map(arr => arr.slice());
    let column = gridCopy[columnOrderNum].reverse();
    let emptyCell = column.indexOf(null);
    if (emptyCell === -1) return;
    column[emptyCell] = state.playerTurn;
    column.reverse();
    setState({
      ...state,
      playerTurn: state.playerTurn === 'Red' ? 'Yellow' : 'Red',
      grid: gridCopy
    });
  }

  function winsVertically(bs) {
    for (let c = 0; c < 7; c++)
      for (let r = 0; r < 4; r++)
        if (checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
          return bs[c][r]
    return false
  }

  function winsHorizontally(bs) {
    for (let r = 0; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
          return bs[c][r]
    return false
  }

  function winsDiagonally(bs) {
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (checkLine(bs[c][r], bs[c + 1][r + 1], bs[c + 2][r + 2], bs[c + 3][r + 3]))
          return bs[c][r]
    return false
  }

  function winsDiagonallyM(bs) {
    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (checkLine(bs[c][r], bs[c - 1][r + 1], bs[c - 2][r + 2], bs[c - 3][r + 3]))
          return bs[c][r]
    return false;
  }

  function checkLine(a, b, c, d) {
    return ((a !== null) && (a === b) && (a === c) && (a === d));
  }

  return <div className="game-table">
    {state.grid.map((el, i) =>
        <Column key={i}
                onClick={() => makeMove(i)}
                circles={el}/>
    )}
  </div>
}

