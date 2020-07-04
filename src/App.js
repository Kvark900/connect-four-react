import React, {createContext, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/Navbar/Navbar";

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
