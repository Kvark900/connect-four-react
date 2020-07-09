export default function GameLogic(grid, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS) {
  function playerWins(grid) {
    return winsVertically(grid) ||
           winsHorizontally(grid) ||
           winsOnMainDiagonal(grid) ||
           winsOnMinorDiagonal(grid);
  }

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

  function winsOnMainDiagonal(grid) {
    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (fourConnected(grid[c][r], grid[c + 1][r + 1], grid[c + 2][r + 2], grid[c + 3][r + 3]))
          return grid[c][r];
    return false
  }

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

  return playerWins(grid);

}
