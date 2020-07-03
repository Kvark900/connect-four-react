import React, {Component} from 'react';
import './Board.css';
import $ from "jquery"
import Column from "../Column/Column";

export default class Board extends Component {
  numberOfRows = 6;
  numberOfColumns = 7;
  _grid = undefined;
  _rows = undefined;
  _circles = undefined;

  constructor() {
    super();
    this.state = {
      boardState: new Array(6).fill(new Array(7).fill(null)),
      playerTurn: 'Red',
      gameMode: '',
      gameSelected: false,
      winner: ''
    }
  }


  componentDidMount() {
/*
    console.log(this._grid);
    console.log(this.state);
    this.initRows();
    this.initCircles();
*/
  }

  initRows() {
    this._rows = this._grid.children[0].children;
    console.log("rows: ", this._rows)
  }

  initCircles() {
    this._circles = $('table').find('.circle').toArray();
    console.log("circles: ", this._circles)
  }


  render() {
    let columns = [...Array(6)].map((el, i) =>
        <Column key={i}
                circles={this.state.boardState[i]}/>
    );

    return <div className="game-table">
      {columns}
    </div>


    /*<table ref={table => {
      this._grid = table
    }}
                  className="game-table">*/
    // <tbody>

    // </tbody>
    // </table>
  }

}

