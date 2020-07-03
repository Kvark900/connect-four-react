import React, {Component} from 'react';
import './Board.css';
import $ from "jquery"
import Column from "./Column/Column";

export default class Board extends Component {
  numberOfRows = 6;
  numberOfColumns = 7;
  _grid = undefined;
  _rows = undefined;
  _circles = undefined;

  constructor() {
    super();
    this.state = {
      grid: new Array(this.numberOfColumns)
          .fill(new Array(this.numberOfRows)
              .fill(null)),
      playerTurn: 'Red',
      gameMode: '',
      gameSelected: false,
      winner: ''
    }
  }

  makeMove(columnOrderNum) {
    const gridCopy = this.state.grid.map(arr => arr.slice());
    let column = gridCopy[columnOrderNum].reverse();
    let emptyCell = column.indexOf(null);
    if (emptyCell === -1) return;
    column[emptyCell] = this.state.playerTurn;
    column.reverse();
    this.setState({
      playerTurn: this.state.playerTurn === 'Red' ? 'Yellow' : 'Red',
      grid: gridCopy
    });
  }

  render() {
    return <div className="game-table">
      {this.state.grid.map((el, i) =>
          <Column key={i}
                  onClick={() => this.makeMove(i)}
                  circles={el}/>
      )}
    </div>
  }

}

