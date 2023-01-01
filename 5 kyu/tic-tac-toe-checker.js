// DESCRIPTION 

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]

// We want our function to return:

//     -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//     1 if "X" won,
//     2 if "O" won,
//     0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.


// MY SOLUTION



/*
This is a terrible burte force answer but I feel quite unwell today so just want 
to get my daily practice done! Will have a crack at refactoring at another date
*/


function isSolved(board) {
    let diagonal = []
    let answer = -1
    for (let i = 0; i < board.length; i++) {
      let beginningOfRow = board[i][0]
      let beginningOfColumn = board[0][i]
      let partOfDiagonal = board[i][i]
      if (beginningOfRow === board[i][1] &&  board[i][1] === board[i][2] && beginningOfRow !== 0) {
        answer = beginningOfRow
      }
      if (beginningOfColumn === board[1][i] && board[1][i] === board[2][i] && beginningOfColumn!== 0) {
        answer = beginningOfColumn
      }
      if (partOfDiagonal) {
        diagonal.push(partOfDiagonal)
      }
    }
    if (diagonal[0] === diagonal[1] && diagonal[1] === diagonal[2] && diagonal.length === 3) {
      answer = diagonal[0]
    }
    if (answer === -1 && board.every(element => !element.includes(0))) {
      answer = 0
    }
    return answer
  }