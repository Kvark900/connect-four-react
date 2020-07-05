import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/Navbar/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router";
import GameLogic from "./components/Game/GameLogic";

export const GameContext = createContext(null);

export default function App() {
  const NUMBER_OF_ROWS = 6;
  const NUMBER_OF_COLUMNS = 7;
  const INITIAL_GRID = new Array(NUMBER_OF_COLUMNS).fill(new Array(NUMBER_OF_ROWS).fill(null));

  let [grid, setGrid] = useState(INITIAL_GRID);
  let [gameEnabled, setGameEnabled] = useState(false);
  let [gameMode, setGameMode] = useState(null);
  let [playerTurn, setPlayerTurn] = useState("Yellow");

  useEffect(() => {
    let wins = GameLogic(grid, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);
    if (wins) {
      alert(`Player ${wins} wins`);
      enableGame(false)
    }
    else playAIMove();
  }, [grid]);

  function playMove(columnOrderNum) {
    if (disablePlay()) return;
    const gridClone = grid.map(arr => arr.slice());
    let column = gridClone[columnOrderNum].reverse();
    let emptyCell = column.indexOf(null);
    if (emptyCell === -1) return;
    column[emptyCell] = playerTurn;
    column.reverse();
    changePlayerTurn(playerTurn === 'Red' ? 'Yellow' : 'Red');
    updateGrid(gridClone);
  }

  function playAIMove() {
    if (gameMode === "VSCOMPUTER" && playerTurn === "Red") {
      const aiMove = getAIMove();
      if (aiMove !== -1) playMove(aiMove)
    }
  }

  function resetGrid() {
    setGrid(INITIAL_GRID)
  }

  function getAIMove() {
    let aIMove = -1;
    while (aIMove === -1) {
      let column = Math.floor((Math.random() * 7));
      if (grid[column].indexOf(null) !== -1)
        aIMove = column;
      else
        aIMove = -1
    }
    return aIMove;
  }

  function disablePlay() {
    return localStorage.getItem("authUser") == null
        || !gameEnabled;
  }


  //region Mutators
  function updateGrid(grid) {
    setGrid(grid)
  }

  function enableGame(bool = false) {
    setGameEnabled(bool)
  }

  function changeGameMode(gameMode = "") {
    setGameMode(gameMode)
  }

  function changePlayerTurn(player) {
    setPlayerTurn(player)
  }

  //endregion

  if (localStorage.getItem("authUser") == null) return <Redirect to="/login"/>;

  return (
      <GameContext.Provider value={
        {
          grid, updateGrid,
          gameEnabled, enableGame,
          gameMode, changeGameMode,
          playerTurn, changePlayerTurn,
          getAIMove, playMove, resetGrid
        }}>
        <Router>
          <NavbarMenu/>
          <div className="Game">
            <Board/>
            <Menu/>
          </div>
        </Router>
      </GameContext.Provider>
  );
}
