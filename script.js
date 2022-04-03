var currPlayer = "0";
var noOfFilledCells = 0;

function showCurrentPlayer(currPlayer) {
  document.getElementById('statusGame').innerHTML = "It is " + currPlayer + " turn";
}

function putXorY(rowIndex, cellIndex) {
  ++noOfFilledCells;
  let table = document.getElementById('myTable');
  let cellClicked = table.rows[rowIndex].cells[cellIndex];
  cellClicked.onclick = " ";
  if (currPlayer == "0") {
    cellClicked.innerHTML = "0";
    currPlayer = "x";
  } else {
    cellClicked.innerHTML = "x";
    currPlayer = "0";
  }
  compareValues();
  showCurrentPlayer(currPlayer);
}

function compareValues() {
  let table = document.getElementById('myTable');
  let isWinner = 0;
  for (let i = 0; i < table.rows.length && isWinner == 0; ++i) {
    let noOfCells = table.rows[i].cells.length;
    for (let j = 0; j < noOfCells - 2; ++j) {
      let valRowCell = table.rows[i].cells[j].textContent;
      let valColumnCell = table.rows[j].cells[i].textContent;
      let mainDiagonal = table.rows[i].cells[i].textContent;
      let secondDiagonal = table.rows[j].cells[j + 2].textContent;
      //check each row for equal values
      if (valRowCell == "x" || valRowCell == "0") {
        if (table.rows[i].cells[j].textContent == table.rows[i].cells[j + 1].textContent && table.rows[i].cells[j].textContent == table.rows[i].cells[j + 2].textContent) {
          document.getElementById('winner').innerHTML = table.rows[i].cells[j].textContent + " wins";
          isWinner = 1;
          break;
        }
      }
      //check each column for equal values
      if (valColumnCell == "x" || valColumnCell == "0") {
        if (table.rows[j].cells[i].textContent == table.rows[j + 1].cells[i].textContent && table.rows[j].cells[i].textContent == table.rows[j + 2].cells[i].textContent) {
          document.getElementById('winner').innerHTML = table.rows[j].cells[i].textContent + " wins";
          isWinner = 1;
          break;
        }
      }
      //check the main diagonal
      if (mainDiagonal == "x" || mainDiagonal == "0") {
        if (table.rows[j].cells[j].textContent == table.rows[j + 1].cells[j + 1].textContent && table.rows[j].cells[j].textContent == table.rows[j + 2].cells[j + 2].textContent) {
          document.getElementById('winner').innerHTML = table.rows[j].cells[j].textContent + " wins";
          isWinner = 1;
          break;
        }
      }
      //check the second Diagonal
      if (secondDiagonal == "x" || secondDiagonal == "0") {
        if (table.rows[j + 2].cells[j].textContent == table.rows[j + 1].cells[j + 1].textContent && table.rows[j + 2].cells[j].textContent == table.rows[j].cells[j + 2].textContent) {
          document.getElementById('winner').innerHTML = table.rows[j + 2].cells[j].textContent + " wins";
          isWinner = 1;
          break;
        }
      }
    }
  }
  if (noOfFilledCells == 9 && isWinner == 0) {
    document.getElementById('winner').innerHTML = "No winner, it's a draw!";
  }
}

function resetGame() {
  let table = document.getElementById('myTable');
  for (let i = 0; i < table.rows.length; ++i) {
    for (let j = 0; j < table.rows[i].cells.length; ++j) {
      table.rows[i].cells[j].textContent = " ";
      table.rows[i].cells[j].onclick = function() {
        putXorY(i, j);
      };
    }
  }
  noOfFilledCells = 0;
  currPlayer = "0";
  document.getElementById('winner').innerHTML = " ";
}

showCurrentPlayer(currPlayer);
