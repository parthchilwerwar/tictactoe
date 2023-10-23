const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const winnerText = document.getElementById('winner');
let currentPlayer = 'X';
let moves = 0;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function makeMove(cell) {
  const index = Array.from(cells).indexOf(cell);
  if (gameBoard[index] === '' && !isGameOver()) {
    cell.textContent = currentPlayer;
    gameBoard[index] = currentPlayer;
    moves++;
    if (isWinner()) {
      result.style.display = 'block';
      winnerText.textContent = `Player '${currentPlayer}' won`;
    } else if (moves === 9) {
      result.style.display = 'block';
      winnerText.textContent = "Draw";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function isWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function isGameOver() {
  return result.style.display === 'block';
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  moves = 0;
  cells.forEach(cell => (cell.textContent = ''));
  result.style.display = 'none';
  winnerText.textContent = '';
}

cells.forEach(cell => cell.addEventListener('click', () => makeMove(cell)));
