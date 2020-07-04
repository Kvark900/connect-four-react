import React, {createContext, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/Navbar/Navbar";
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from "react-router-dom"
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export const GameContext = createContext(
    {
      grid: [],
      setGrid: () => {
      }
    }
);

export default function App() {
  let [grid, setGrid] = useState([]);

  return (
        <GameContext.Provider value={{grid: grid, setGrid: setGrid}}>
          <NavbarMenu/>
          <div className="Game">
            <Board/>
            <Menu/>
          </div>
        </GameContext.Provider>

  );
}
