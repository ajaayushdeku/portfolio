const boardEl = document.querySelector(".board");
const boardContainerEl = document.querySelector(".board-container");

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let score = 0;
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best");
const upArrow = document.getElementById("upArrow");
const leftArrow = document.getElementById("leftArrow");
const downArrow = document.getElementById("downArrow");
const rightArrow = document.getElementById("rightArrow");
const playButton = document.querySelector(".play-btn");
const replayButton = document.querySelector(".replay-btn");

replayButton.style.display = "none";
let bestScore = Number(localStorage.getItem("2048BestScore")) || 0;

let gameEnded = false;
let overlay = null;
bestScoreEl.textContent = bestScore;

const updateBestScore = () => {
  if (score > bestScore) {
    bestScore = score;
    bestScoreEl.classList.add(".new-best-score");
    localStorage.setItem("2048BestScore", bestScore);
  }
};

const updateScoreDisplay = () => {
  scoreEl.textContent = score;
  bestScoreEl.textContent = bestScore;
};

/*---------------- Empty Cells ----------------*/
const getEmptyCells = () => {
  const empty = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c] === 0) empty.push([r, c]);
    }
  }
  return empty;
};

/*---------------- Spawn Tile ----------------*/
let lastSpawn = null;
const spawnTile = () => {
  const empty = getEmptyCells();
  if (empty.length === 0) return;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  board[r][c] = Math.random() < 0.9 ? 2 : 4;
  lastSpawn = [r, c];
};

/*---------------- Render Board ----------------*/
const renderBoard = () => {
  boardEl.innerHTML = "";
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const cell = document.createElement("div");
      if (board[r][c] !== 0) {
        cell.textContent = board[r][c];
        cell.classList.add("tile");
        cell.dataset.value = board[r][c];
        if (lastSpawn && lastSpawn[0] === r && lastSpawn[1] === c) {
          cell.classList.add("pop");
        }
      }
      boardEl.appendChild(cell);
    }
  }
};
renderBoard();

/*---------------- Score Popper ----------------*/
const scorePopper = (value, tileEl) => {
  const scorePop = document.createElement("div");
  scorePop.classList.add("score-pop");
  scorePop.textContent = `+${value}`;

  const tileRect = tileEl.getBoundingClientRect();
  const containerRect = boardContainerEl.getBoundingClientRect();

  scorePop.style.position = "absolute";
  scorePop.style.left = `${tileRect.left - containerRect.left}px`;
  scorePop.style.top = `${tileRect.top - containerRect.top}px`;

  boardContainerEl.appendChild(scorePop);

  scorePop.addEventListener("animationend", () => {
    scorePop.remove();
  });
};

/*---------------- Slide Functions ----------------*/
const slideRowLeft = (row, rIndex) => {
  let arr = row.filter((v) => v !== 0);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr[i] *= 2;
      arr[i + 1] = 0;
      score += arr[i];

      const tileEl = boardEl.children[rIndex * 4 + i];

      if (tileEl) {
        scorePopper(arr[i], tileEl);
      }
    }
  }
  arr = arr.filter((v) => v !== 0);

  while (arr.length < 4) {
    arr.push(0);
  }

  return arr;
};

const slideRowRight = (row, rIndex) => {
  let arr = row.filter((v) => v !== 0);

  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i] === arr[i - 1]) {
      arr[i] *= 2;
      arr[i - 1] = 0;
      score += arr[i];

      // Calculate final position after slide right
      const finalCol = 3 - (arr.length - 1 - i);
      const tileEl = boardEl.children[rIndex * 4 + finalCol];
      if (tileEl) {
        scorePopper(arr[i], tileEl);
      }
    }
  }
  arr = arr.filter((v) => v !== 0);

  while (arr.length < 4) {
    arr.unshift(0);
  }

  return arr;
};

/*---------------- Moves ----------------*/
const moveLeft = () => {
  for (let r = 0; r < 4; r++) {
    board[r] = slideRowLeft(board[r], r);
  }
};

const moveRight = () => {
  for (let r = 0; r < 4; r++) {
    board[r] = slideRowRight(board[r], r);
  }
};

const moveUp = () => {
  for (let c = 0; c < 4; c++) {
    let col = [];

    for (let r = 0; r < 4; r++) {
      col.push(board[r][c]);
    }

    col = col.filter((v) => v !== 0);

    for (let i = 0; i < col.length - 1; i++) {
      if (col[i] === col[i + 1]) {
        col[i] *= 2;
        col[i + 1] = 0;
        score += col[i];

        const tileEl = boardEl.children[i * 4 + c];

        if (tileEl) {
          scorePopper(col[i], tileEl);
        }
      }
    }

    col = col.filter((v) => v !== 0);

    while (col.length < 4) {
      col.push(0);
    }

    for (let r = 0; r < 4; r++) {
      board[r][c] = col[r];
    }
  }
};

const moveDown = () => {
  for (let c = 0; c < 4; c++) {
    let col = [];

    for (let r = 0; r < 4; r++) {
      col.push(board[r][c]);
    }

    col.reverse();

    col = col.filter((v) => v !== 0);

    for (let i = col.length - 1; i >= 1; i--) {
      if (col[i] === col[i - 1]) {
        col[i] *= 2;
        col[i - 1] = 0;
        score += col[i];

        // Calculate final position after slide down
        const finalRow = 3 - (col.length - 1 - i);
        const tileEl = boardEl.children[finalRow * 4 + c];
        if (tileEl) {
          scorePopper(col[i], tileEl);
        }
      }
    }

    col = col.filter((v) => v !== 0);

    while (col.length < 4) {
      col.push(0);
    }

    col.reverse();

    for (let r = 0; r < 4; r++) {
      board[r][c] = col[r];
    }
  }
};

/*---------------- Merge Check ----------------*/
const canMerge = () => {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const val = board[r][c];
      if (r < 3 && board[r + 1][c] === val) return true;
      if (c < 3 && board[r][c + 1] === val) return true;
    }
  }
  return false;
};

/*---------------- Game Over ----------------*/
const checkGameOver = () => {
  return !board.flat().includes(0) && !canMerge();
};

/*---------------- Win Check ----------------*/
let hasWon = false;
const checkWin = () => {
  if (!hasWon && board.flat().includes(2048)) {
    hasWon = true;
    return true;
  }
  return false;
};

const showOverlay = (text, cls) => {
  if (overlay) return;
  overlay = document.createElement("div");
  overlay.className = cls;
  overlay.textContent = text;
  boardContainerEl.appendChild(overlay);
  gameEnded = true;
};

/*---------------- Detect Board Change ----------------*/
const tryMove = (moveFunc) => {
  if (gameEnded) return;

  const before = JSON.stringify(board);
  moveFunc();
  const after = JSON.stringify(board);

  if (before !== after) {
    spawnTile();
    renderBoard();
    updateBestScore();
    updateScoreDisplay();
  }

  if (checkGameOver()) {
    showOverlay("😟 Game Over!", "game-over");
  }

  if (checkWin()) {
    showOverlay("🥳 You Won!", "game-won");
  }
};

/*---------------- Key Controls ----------------*/
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") tryMove(moveLeft);
  else if (e.key === "ArrowRight") tryMove(moveRight);
  else if (e.key === "ArrowUp") tryMove(moveUp);
  else if (e.key === "ArrowDown") tryMove(moveDown);
});

/*---------------- Button Controls ----------------*/
leftArrow.onclick = () => tryMove(moveLeft);
rightArrow.onclick = () => tryMove(moveRight);
upArrow.onclick = () => tryMove(moveUp);
downArrow.onclick = () => tryMove(moveDown);

/*---------------- Initial State ----------------*/
const initialState = () => {
  score = 0;
  board = Array(4)
    .fill(0)
    .map(() => Array(4).fill(0));

  lastSpawn = null;
  gameEnded = false;
  if (overlay) overlay.remove();
  overlay = null;

  spawnTile();
  spawnTile();
  updateScoreDisplay();
  renderBoard();
};

/*---------------- Button Events ----------------*/
playButton.addEventListener("click", () => {
  initialState();
  playButton.style.display = "none";
  replayButton.style.display = "inline-block";
});

replayButton.addEventListener("click", () => initialState());
