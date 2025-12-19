const board = document.getElementById("board");
const scoreEL = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const playBtn = document.getElementById("play");
const replayBtn = document.getElementById("replay");

const upArrowBtn = document.getElementById("up-arrow");
const leftArrowBtn = document.getElementById("left-arrow");
const rightArrowBtn = document.getElementById("right-arrow");
const downArrowBtn = document.getElementById("down-arrow");

const GRID_SIZE = 40;
let snake = [{ x: 10, y: 10 }];
let food = {};
let direction = { x: 0, y: 0 };
let score = 0;
let gameInterval;

let highScore = Number(localStorage.getItem("snakeHighScore")) || 0;

const updateHighScore = () => {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("snakeHighScore", highScore);
  }
};

const updateScoreDisplay = () => {
  scoreEL.textContent = score;
  highScoreEl.textContent = highScore;
};

// Create Board, set all the gird to cells to move the snake
const createBoard = () => {
  board.innerHTML = "";
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    board.appendChild(cell);
  }
};

// Draw the snake movement
const draw = () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("snake", "food");
  });

  snake.forEach((part) => {
    const index = part.y * GRID_SIZE + part.x;
    board.children[index].classList.add("snake");
  });

  const foodIndex = food.y * GRID_SIZE + food.x;
  board.children[foodIndex].classList.add("food");
};

// Snake Movement  and Colision Detection
const moveSnake = () => {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Wall collision
  if (
    head.x < 0 ||
    head.x >= GRID_SIZE ||
    head.y < 0 ||
    head.y >= GRID_SIZE ||
    snake.some((p) => p.x === head.x && p.y === head.y)
  ) {
    clearInterval(gameInterval);

    const gameOver = document.createElement("div");
    gameOver.textContent = `😔 Game Over!  `;
    gameOver.classList.add("game-over");
    board.appendChild(gameOver);

    const currentScore = document.createElement("div");
    currentScore.textContent = `Your Score: ${score} | High Score: ${highScore}`;
    currentScore.classList.add("go-score");
    gameOver.appendChild(currentScore);

    return;
  }

  snake.unshift(head);

  // Eat Food
  if (head.x === food.x && head.y === food.y) {
    score++;
    updateHighScore();
    updateScoreDisplay();
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
};

// Spawn Food at Random Position
const spawnFood = () => {
  food = {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
};

// Key Press Movement Controls
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      direction = { x: 1, y: 0 };
      break;
  }
});

// On Screen Controls
upArrowBtn.addEventListener("click", () => {
  direction = { x: 0, y: -1 };
});

leftArrowBtn.addEventListener("click", () => {
  direction = { x: -1, y: 0 };
});

rightArrowBtn.addEventListener("click", () => {
  direction = { x: 1, y: 0 };
});

downArrowBtn.addEventListener("click", () => {
  direction = { x: 0, y: 1 };
});

// Start/Restart the Game
const startGame = () => {
  snake = [{ x: 10, y: 10 }];
  direction = { x: 1, y: 0 };
  score = 0;

  updateScoreDisplay(); // <-- also shows high score here

  spawnFood();
  createBoard();
  draw();

  clearInterval(gameInterval);
  gameInterval = setInterval(moveSnake, 150); // For continous Snake movement
};

replayBtn.style.display = "none";
replayBtn.addEventListener("click", startGame);

playBtn.addEventListener("click", () => {
  startGame();
  playBtn.style.display = "none";
  replayBtn.style.display = "block";
});
