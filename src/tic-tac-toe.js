
let firstPlayer = 'x'
let secondPlayer = 'o'
let nextplayer = {
    [firstPlayer] : secondPlayer,
    [secondPlayer] : firstPlayer,
}
class TicTacToe {
    constructor() {
    this.currentPlayer = 'x'   
    this.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
  }
    
    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] != null) {
        return 
        } 
         this.board[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = nextplayer[this.currentPlayer]
    }

    isFinished() {
        
          return !! this.getWinner() || this.noMoreTurns()   
    }
    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
                return this.board[0][i];
            }
        }
       
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0]=== this.board[i][1] && this.board[i][1]=== this.board[i][2]) {
             return this.board[i][0];
            }
        }
        
        if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
                return this.board[0][0];
            }
        else if (this.board[2][0] === this.board[1][1] && this.board[1][1] === this.board[0][2]) {
            return this.board[2][0];
            }
        else {
            return null
            }
 }     
    
    noMoreTurns() {
        return this.board.every(row =>row.every(col =>col))
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex] ? this.board[rowIndex][colIndex]:null
    }
}

module.exports = TicTacToe;
