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
      boardState: new Array(this.numberOfColumns).fill(new Array(this.numberOfRows).fill(null)),
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
    let columns = this.state.boardState.map((el, i) =>
        <Column key={i}
                circles={el}/>
    );

    return <div className="game-table">
      {columns}
    </div>
  }

}

