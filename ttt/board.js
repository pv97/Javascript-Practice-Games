class Board {
  constructor() {
    this.grid = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]]
  }

  print(){
    for (var i = 0; i < this.grid.length; i++) {
      console.log(this.grid[i]);
    }
  }

  won(){
    let res = this._checkRows()
    if (res !== "_") {
      return true
    }
    res = this._checkCols()
    if (res !== "_") {
      return true
    }
    res = this._checkDiags()
    if (res !== "_") {
      return true
    }
    return false
  }

  _checkRows(){
    for (var i = 0; i < this.grid.length; i++) {
      if (this.grid[i].toString() == ['x','x','x'].toString()) {
        return 'x';
      } else if (this.grid[i].toString() == ['o','o','o'].toString()) {
        return 'o';
      }
    }
    return "_"
  }

  _checkCols(){
    this._transpose()
    let ans = this._checkRows()
    this._transpose()
    return ans
  }

  _transpose(){
    this.grid = this.grid[0].map((col, i) => {
      return this.grid.map((row) => {
        return row[i]
      })
    });
  }

  _checkDiags(){
    let diag1 = [this.grid[0][0], this.grid[1][1], this.grid[2][2]]
    let diag2 = [this.grid[2][0], this.grid[1][1], this.grid[0][2]]
    if (diag1.toString() === ['x','x','x'].toString()){
      return 'x'
    } else if (diag1.toString() === ['o','o','o'].toString()) {
      return 'o'
    }
    if (diag2.toString() === ['x','x','x']){
      return 'x'
    } else if (diag2.toString() === ['o','o','o'].toString()) {
      return 'o'
    }
    return "_"
  }
}

module.exports = Board;
