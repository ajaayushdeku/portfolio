const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const cells = document.querySelectorAll(".cell");

const playButtonEl = document.querySelector(".play-btn");
const replayButtonEl = document.querySelector(".replay-btn");

const header = document.querySelector(".heading");
const info = document.querySelector(".info");

// Initial Condition
replayButtonEl.style.display = "none";

// Block Action on Cells Booleans/Conditions
let gameOver = false;
let gameStart = false;

let currentPlayer = "X";

// Assign Each Cell to Each Matrix Coordinate
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;
    if (!gameStart) return;
    if (cell.textContent !== "") return;

    const row = cell.dataset.row;
    const col = cell.dataset.col;

    // Prevent Cell Fill Overwrite
    if (board[row][col] !== "") return;

    board[row][col] = currentPlayer;
    cell.textContent = currentPlayer;

    console.log("Current Board:", board);

    if (currentPlayer === "X") {
      cell.style.background = "#fecaca";
      cell.style.color = "#7f1d1d";

      info.textContent = `Player "O" Turn`;
    } else {
      cell.style.background = "#93c5fd";
      cell.style.color = "#1e3a8a";

      info.textContent = `Player "X" Turn`;
    }

    coordinateMatching();

    checkTie();

    // Swtich Player Turn
    if (!gameOver) currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

// Check win
const coordinateMatching = () => {
  const winPatterns = [
    // rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;

    if (
      board[a[0]][a[1]] != "" &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      pattern.forEach(([row, col]) => {
        const cell = document.querySelector(
          `.cell[data-row="${row}"][data-col="${col}"]`
        );
        cell.style.background = "rgba(37, 224, 103, 1)";
        cell.style.color = "#0e3d0eff";
      });

      info.textContent = `👑 Player ${board[a[0]][a[1]]} Wins!!!`;
      info.style.color = "#e6d145ff";

      gameOver = true;
      return;
    }
  }
};

// Check Tie
const checkTie = () => {
  const isFull = board.every((row) => row.every((cell) => cell !== ""));
  if (isFull && !gameOver) {
    gameOver = true;
    info.textContent = "It's a Tie!";
    info.style.color = "#787777ff";
  }
};

// Play/Start Game Functionality
playButtonEl.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.style.opacity = "1";
  });
  gameStart = true;

  playButtonEl.style.display = "none";
  replayButtonEl.style.display = "block";
});

// Replay Functionality
replayButtonEl.addEventListener("click", () => {
  // reset board values
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      board[row][col] = "";
    }
  }

  // reset UI
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.background = ""; // reset color
    cell.style.color = "";
    cell.classList.remove("win"); // remove highlight
  });

  gameStart = true;
  gameOver = false;
  currentPlayer = "X";
  info.textContent = `Player "X" Turn`;
  info.style.color = "#ffffff";
});
