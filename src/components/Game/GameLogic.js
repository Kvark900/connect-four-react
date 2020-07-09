export default function playerWins(grid, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS) {
  return winsVertically(grid) ||
      winsHorizontally(grid) ||
      winsOnMainDiagonal(grid) ||
      winsOnMinorDiagonal(grid);

  function winsVertically(grid) {
    for (let c = 0; c < NUMBER_OF_COLUMNS; c++)
      for (let r = 0; r < 4; r++)
        if (fourConnected(grid[c][r], grid[c][r + 1], grid[c][r + 2], grid[c][r + 3]))
          return grid[c][r];
    return false
  }

  function winsHorizontally(grid) {
    for (let r = 0; r < NUMBER_OF_ROWS; r++)
      for (let c = 0; c < 4; c++)
        if (fourConnected(grid[c][r], grid[c + 1][r], grid[c + 2][r], grid[c + 3][r]))
          return grid[c][r];
    return false
  }

  /**
   * To find first disc in a connected sequence,
   * algorithm scans discs in top left grid [0-2][0-3](inclusively) only.
   * Discs in the rest of the grid cannot be
   * the first disc in a sequence on the main diagonal
   * to form a sequence of four.
   * (Direction is top left to bottom right)
   *
   * The main diagonal of a matrix A
   * is the collection of entries A{i,j} where i=j.
   *
   * @param grid
   * @returns {boolean| color of wining player}
   */
  function winsOnMainDiagonal(grid) {
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (fourConnected(grid[c][r], grid[c + 1][r + 1], grid[c + 2][r + 2], grid[c + 3][r + 3]))
          return grid[c][r];
    return false
  }


  /**
   * To find first disc in a connected sequence,
   * algorithm scans discs in top right grid
   * [0-3][3-5](inclusively) only.
   *
   * Discs in the rest of the grid cannot be
   * the first disc in a sequence on the minor diagonal
   * to form a sequence of four.
   * (Direction is top right to bottom left)
   *
   * @param grid
   * @returns {boolean| color of wining player}
   */
  function winsOnMinorDiagonal(grid) {
    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (fourConnected(grid[c][r], grid[c - 1][r + 1], grid[c - 2][r + 2], grid[c - 3][r + 3]))
          return grid[c][r];
    return false;
  }

  function fourConnected(a, b, c, d) {
    return (a !== null && a === b && a === c && a === d);
  }
}
