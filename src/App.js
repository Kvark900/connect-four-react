import React, {createContext, useState} from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';


export const GameContext = createContext(
    {grid: [],
    setGrid: () => {}}
);

export default function App() {
  let [grid, setGrid] = useState([]);


  return (
      <GameContext.Provider value={ {grid: grid, setGrid: setGrid}}>
        <div className="Game">
          <Board/>
          <Menu/>
        </div>
      </GameContext.Provider>
  );
}
