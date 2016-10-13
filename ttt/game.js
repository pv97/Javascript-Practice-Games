
const Board = require("./board");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.board = new Board();
    this.player = 'x'
  }

  promptMove(callback){
    this.board.print();
    reader.question("row: ", (row) => {
      reader.question("col: ", (col) => {
        row = parseInt(row)
        col = parseInt(col)
        this.board.grid[row][col] = this.player;
        this.switchPlayer();
        callback();
      });
    });
  }

  run(completionCallback) {
    this.promptMove(() => {
      if (!this.board.won()){
        this.run(completionCallback);
      } else {
        console.log("Winner!");
        completionCallback();
      }
    });
  }

  switchPlayer(){
    this.player === 'x' ? this.player = 'o' : this.player = 'x'
  }
}

let g = new Game;
g.run(completion);

function completion() {
  reader.question("Play again? y or n: ", restartGame => {
    if (restartGame === "y") {
      g = new Game();
      g.run(completion);
    } else {
      reader.close();
    }
  });
};
