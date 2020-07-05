import React, {createContext, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/Navbar/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {Redirect} from "react-router";


export const GameContext = createContext(
    {
      grid: [],
      setGrid: () => {
      }
    }
);

export default function App() {
  let [grid, setGrid] = useState([]);
  if (localStorage.getItem("authUser") == null) return <Redirect to="/login"/>

  return (
      <GameContext.Provider value={{grid: grid, setGrid: setGrid}}>
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
