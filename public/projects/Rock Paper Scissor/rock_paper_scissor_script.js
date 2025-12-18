const gameMode = document.querySelectorAll(".mode-btn");

const leftScoreEl = document.getElementById("score-left");
const rightScoreEl = document.getElementById("score-right");

const leftPlayerNameEl = document.querySelector(".score.left .player-name");
const rightPlayerNameEl = document.querySelector(".score.right .player-name");

const leftTitle = document.getElementById("left-title");
const rightTitle = document.getElementById("right-title");

// Control Buttons
const controlBtns = document.querySelector(".controls");
const submitMove = document.getElementById("submit-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const resetButton = document.getElementById("reset-btn");

const resultBoxEl = document.querySelector(".result-box");

const player1Panel = document.querySelector(".player-panel-1");
const player2Panel = document.querySelector(".player-panel-2");

let scorePvP = [0, 0];

// Moves Choice Select Logic
const choiceP1 = document.querySelectorAll(".choice-p1");
const choiceP2 = document.querySelectorAll(".choice-p2");

const chosenP1Move = document.getElementById("left-move");
const chosenP2Move = document.getElementById("right-move");

// Player 1 keys
const keyMapP1 = {
  r: "rock",
  p: "paper",
  s: "scissor",
};

// Player 2 keys
const keyMapP2 = {
  ArrowLeft: "rock",
  ArrowUp: "paper",
  ArrowRight: "scissor",
};

// Players Move
let move1;
let move2;

// Moves Win Conditions
const winMap = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

// Initial Condition of the Game
const initialGameCond = () => {
  scorePvP = [0, 0];
  leftScoreEl.textContent = 0;
  rightScoreEl.textContent = 0;

  resultBoxEl.textContent = "Choose your move";

  move1 = move2 = null;
  chosenP1Move.textContent = "❔";
  chosenP2Move.textContent = "❔";

  submitMove.style.display = "block";
  playAgainBtn.style.display = "none";

  player1Panel.style.background = "#020617";
  player2Panel.style.background = "#020617";
};

// Game Mode Switch Logic
gameMode.forEach((btn) => {
  btn.addEventListener("click", () => {
    gameMode.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    initialGameCond();

    document.body.dataset.mode = btn.dataset.mode;

    if (btn.dataset.mode === "cpu") {
      leftPlayerNameEl.textContent = leftTitle.textContent = "🙎🏻‍♀️Player";
      rightPlayerNameEl.textContent = rightTitle.textContent = "🖥️Computer";
    } else {
      leftPlayerNameEl.textContent = leftTitle.textContent = "🙎🏻Player1";
      rightPlayerNameEl.textContent = rightTitle.textContent = "🙎🏻‍♂️Player 2";
    }

    moveCPU();
  });
});

const markChosen = (el) => {
  el.textContent = "Move Chosen";
  el.style.fontSize = "2rem";
};

const moveCPU = () => {
  // For Player vs Computer Mode
  if (document.body.dataset.mode === "cpu") {
    const moves = ["rock", "paper", "scissor"];
    move2 = moves[Math.floor(Math.random() * moves.length)]; // Chose One Random Move from the move list

    markChosen(chosenP2Move);

    console.log("Computer Move:", move2);
  }
};

// Player 1 Move Choose Logic
choiceP1.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (choice.dataset.mode === "rock") {
      move1 = "rock";
      console.log("Move 1st Player:", move1);
    } else if (choice.dataset.mode === "paper") {
      move1 = "paper";
      console.log("Move 1st Player:", move1);
    } else if (choice.dataset.mode === "scissor") {
      move1 = "scissor";
      console.log("Move 1st Player:", move1);
    }

    markChosen(chosenP1Move);
  });
});

// Player 2 Move Choose Logic
choiceP2.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (choice.dataset.mode === "rock") {
      move2 = "rock";
      console.log("Move 2nd Player:", move2);
    } else if (choice.dataset.mode === "paper") {
      move2 = "paper";
      console.log("Move 2nd Player:", move2);
    } else if (choice.dataset.mode === "scissor") {
      move2 = "scissor";
      console.log("Move 2nd Player:", move2);
    }

    markChosen(chosenP2Move);
  });
});

// Key Press Moves Select Logic
document.addEventListener("keydown", (e) => {
  const key = e.key;

  // Player 1
  if (keyMapP1[key]) {
    move1 = keyMapP1[key];

    markChosen(chosenP1Move);
    console.log("Player 1:", move1);
  }

  // Player 2
  if (document.body.dataset.mode === "pvp" && keyMapP2[key]) {
    move2 = keyMapP2[key];

    markChosen(chosenP2Move);
    console.log("Player 2:", move2);
  }
});

// Submit Selected Moves
submitMove.addEventListener("click", () => {
  const winner = getWinner(move1, move2);

  if (!winner) return;

  // Clear previous result
  resultBoxEl.textContent = "";

  const result = document.createElement("div");

  if (winner === "tie") {
    result.textContent = "It's a Tie 🤝";
    player1Panel.style.background = "#2f2f2fff";
    player2Panel.style.background = "#2f2f2fff";
  } else {
    const winIndex = Number(winner);
    scorePvP[winIndex - 1]++;

    if (winIndex === 1) {
      leftScoreEl.textContent = scorePvP[0];
      player1Panel.style.background = "#f4d46cff";
      player2Panel.style.background = "#2f2f2fff";
    } else {
      rightScoreEl.textContent = scorePvP[1];
      player1Panel.style.background = "#2f2f2fff";
      player2Panel.style.background = "#f4d46cff";
    }

    if (document.body.dataset.mode === "cpu") {
      result.textContent =
        winner === "2" ? "Computer Wins 🎉" : "Player 1 Wins 🎉";
    } else {
      result.textContent = `Player ${winner} Wins 🎉`;
    }
  }

  chosenP1Move.textContent =
    move1 === "rock" ? "✊" : move1 === "paper" ? "✋" : "✌️";
  chosenP1Move.style.fontSize = "3rem";

  chosenP2Move.textContent =
    move2 === "rock" ? "✊" : move2 === "paper" ? "✋" : "✌️";
  chosenP2Move.style.fontSize = "3rem";

  resultBoxEl.appendChild(result);

  playAgainBtn.style.display = "block";
  submitMove.style.display = "none";
});

// Get Winner Logic
const getWinner = (move1, move2) => {
  if (!move1 || !move2) return null;
  if (move1 === move2) return "tie";
  console.log("Move 1 and 2:", winMap[move1], move2);
  return winMap[move1] === move2 ? "1" : "2";
};

// Play Again Button Logic
playAgainBtn.addEventListener("click", () => {
  chosenP1Move.textContent = "❔";
  chosenP2Move.textContent = "❔";

  resultBoxEl.textContent = "Choose your move";

  playAgainBtn.style.display = "none";
  submitMove.style.display = "block";

  player1Panel.style.background = "#020617";
  player2Panel.style.background = "#020617";

  if (document.body.dataset.mode === "cpu") {
    moveCPU();
  }
});

// Reset Game Logic
resetButton.addEventListener("click", () => {
  // Reset moves
  move1 = null;
  move2 = null;

  initialGameCond();

  // Optional: re-enable choices if you disabled them
  choiceP1.forEach((btn) => btn.classList.remove("disabled"));
  choiceP2.forEach((btn) => btn.classList.remove("disabled"));

  moveCPU();
});
