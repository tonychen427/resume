// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.

/**
 * @param {character[][]} board
 * @return {number}
 */

const updateBoard = (board, x, y) => {
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] !== 'X') { return; }
    board[x][y] = '.';
    updateBoard(board, x+1, y);
    updateBoard(board, x-1, y);
    updateBoard(board, x, y+1);
    updateBoard(board, x, y-1);
}
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') {
                count++;
                updateBoard(board, i, j);
            }
        }
    }
    return count;
};
const board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];
console.log(countBattleships(board));

const countBattleships2 = board => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++ ) {
            if (board[i][j] === '.') { continue; }
            if (i > 0 && board[i - 1][j] === 'X') { continue; }
            if (j > 0 && board[i][j - 1] === 'X') { continue; }
            count++;
        }
    }
    return count;
}
const board2 = [["X",".",".","X"],[".",".","X","X","X"],[".",".",".","X"]];
console.log(countBattleships2(board2));
