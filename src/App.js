import React from 'react';
import './App.css';
import Board from "./components/Board/Board";
import Menu from "./components/gameMenu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <div className="Game">
        <Board/>
        <Menu/>
      </div>
  );
}
