
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



class Game {
  constructor() {
    this.stacks = [[1, 2, 3], [], []];
  }

  promptMove(callback) {
    console.log(this.stacks);
    reader.question("From tower: ", (startTowerIdx) => {
      reader.question("To tower: ", (endTowerIdx) => {
        startTowerIdx = parseInt(startTowerIdx)
        endTowerIdx = parseInt(endTowerIdx)

        if (this.isValidMove(startTowerIdx, endTowerIdx)) {
          this.move(startTowerIdx, endTowerIdx)
        }
        callback();
      })
    })
  }

  isValidMove(startTowerIdx,endTowerIdx){
    if (this.stacks[startTowerIdx].length === 0) {
      return false;
    } else if (this.stacks[endTowerIdx].length === 0 ){
      return true;
    } else {
      if (this.stacks[startTowerIdx][0] > this.stacks[endTowerIdx][0] ) {
        return false;
      } else {
        return true;
      }
    }
  }

  move(startTowerIdx,endTowerIdx) {
    this.stacks[endTowerIdx].unshift(this.stacks[startTowerIdx].shift())
  }

  isWon(){
    if (this.stacks[0].length === 0){
      if (this.stacks[1].length === 0 || this.stacks[2].length === 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  run(completionCallback) {
    this.promptMove(() => {
      if (!this.isWon()){
        this.run(completionCallback);
      } else {
        console.log("Winner!");
        completionCallback();
      }
    });
  }
}

let g = new Game;
g.run(() => reader.close());
