class TicTacToe {
    constructor() {
        this._currentPlayerSymbol = 'x';
        this._board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayerSymbol;
    }

    nextTurn(rowIndex, colIndex) {
        if (this._board[rowIndex][colIndex] != null) {
            return;
        }

        this._board[rowIndex][colIndex] = this._currentPlayerSymbol;

        if (this._currentPlayerSymbol == 'x') {
            this._currentPlayerSymbol = 'o';
        } else {
            this._currentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        // rows
        for (var i = 0; i < 3; i ++) {
            var row = this._board[i];

            if (row[0] == row[1] && row[1] == row[2]) {
                return row[0];
            }
        }

        // cols
        for (var i = 0; i < 3; i ++) {
            if (this._board[0][i] == this._board[1][i] && this._board[1][i] == this._board[2][i]) {
                return this._board[0][i];
            }
        }

        // diagonals
        if (this._board[0][0] == this._board[1][1] && this._board[1][1] == this._board[2][2]) {
            return this._board[0][0];
        }

        if (this._board[0][2] == this._board[1][1] && this._board[1][1] == this._board[2][0]) {
            return this._board[0][2];
        }

        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i ++) {
            for (var j = 0; j < 3; j ++) {
                if (this._board[i][j] == null) {
                    return false;
                }
            }
        }

        return true;
    }

    isDraw() {
        return this.getWinner() == null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this._board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;