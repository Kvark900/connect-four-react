import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/Navbar/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router";
import playerWins from "./components/Game/GameLogic";
import Ranking from "./components/HighScore/Ranking";
import Firebase from "./config/fbConfig";
import * as firebase from "firebase";
import CustomAlert from "./components/shared/CustomAlert";

export const GameContext = createContext(null);

export default function App() {
  const NUMBER_OF_ROWS = 6;
  const NUMBER_OF_COLUMNS = 7;

  /**
   * In order to check for legal moves easily,
   * rows of the matrix are actually columns of the board.
   *
   * @type {string[]}
   */
  const INITIAL_GRID = new Array(NUMBER_OF_COLUMNS).fill(new Array(NUMBER_OF_ROWS).fill(null));
  const FB = Firebase.getInstance();

  let [grid, setGrid] = useState(INITIAL_GRID);
  let [gameEnabled, setGameEnabled] = useState(false);
  let [gameMode, setGameMode] = useState(null);
  let [playerTurn, setPlayerTurn] = useState("Yellow");
  let [rankings, setRankings] = useState([]);
  let [showArrow, setShowArrow] = useState(-1);
  let [showAlert, setShowAlert] = useState(false);
  let [winnerMsg, setWinnerMsg] = useState("");

  async function recordWin() {
    let username = JSON.parse(localStorage.getItem("authUser")).displayName;
    if (await newPlayer(username)) await insertRanking(username)
    else await updateRanking(username);
    setRankings(await getRankings())
  }

  async function getRankings() {
    let fb = Firebase.getInstance();
    const snap = await fb.db.collection("rankings").get();
    return snap.docs.map(doc => doc.data());
  }

  useEffect(() => {
    let wins = playerWins(grid, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS);
    if (wins) {
      // alert(`Player ${wins} wins`);
      setShowAlert(true);
      setWinnerMsg(`Player ${wins} wins`);
      if (playerTurn === "Red" && gameMode === "VSCOMPUTER")
        recordWin();
      enableGame(false)
    } else playAIMove();
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
      aIMove = (grid[column].indexOf(null) !== -1) ? column : -1;
    }
    return aIMove;
  }

  function disablePlay() {
    return localStorage.getItem("authUser") == null
        || !gameEnabled;
  }

  async function updateRanking(username) {
    const increment = firebase.firestore.FieldValue.increment(1);
    await FB.db.collection("rankings")
        .where("user", "==", username)
        .get()
        .then(value => value.docs[0].ref.update({score: increment}));
  }

  async function insertRanking(username) {
    await FB.db.collection("rankings").add({
      user: username,
      score: 1
    })
  }

  async function newPlayer(username) {
    let querySnapshot = await FB.db.collection("rankings")
        .where("user", "==", username)
        .get();
    return querySnapshot.docs.length === 0
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

  function updateRankings(rankings) {
    setRankings(rankings)
  }

  function toggleShowArrow(flag) {
    setShowArrow(flag)
  }

  function toggleShowAlert(flag) {
    setShowAlert(flag)
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
          getAIMove, playMove, resetGrid,
          rankings, updateRankings,
          showArrow, toggleShowArrow,
          showAlert, toggleShowAlert,
          winnerMsg
        }}>
        <Router>
          <NavbarMenu/>
          <CustomAlert show={showAlert} msg={winnerMsg}/>
          <div className="Game">
            <Board/>
            <div className="sideDiv">
              <Menu/>
              <Ranking/>
            </div>
          </div>
        </Router>
      </GameContext.Provider>
  );
}
