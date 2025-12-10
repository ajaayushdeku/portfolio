// Initial Value
let score = [0, 0];
let totalScore = [0, 0];
let player = [1, 2];
let currentPlayer = 1;
let currentScore = 0;
let pointLimit = 20;
let highestScore = 0;

const inActivePlayerBorder = "2px solid #202020";
const activePlayerBorder = "2px solid #eac95eff";
const activePlayerOpacity = "1";
const inActivePlayerOpacity = "0.5";

// Doc
const winner = document.querySelector(".winner");

const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

const dice = document.querySelector(".dice");

const buttonCont = document.querySelector(".button-container");
const playerCont = document.querySelector(".players-container");
const diceCont = document.querySelector(".dice-score-container");

const pointLimitInput = document.getElementById("point-limit");
const setLimitBtn = document.getElementById("set-limit");

winner.textContent = `First Player to Reach ${pointLimit} Points Wins!!!`;

// Initial Reset
dice.classList.add("dice1-highlight");
player1.style.border = activePlayerBorder;
player1.style.opacity = activePlayerOpacity;
player2.style.border = inActivePlayerBorder;
player2.style.opacity = inActivePlayerOpacity;

// Set the Point Limit
setLimitBtn.addEventListener("click", () => {
  const value = parseInt(pointLimitInput.value);
  if (!isNaN(value) && value > 0) {
    pointLimit = value; // your existing pointLimit variable
    winner.textContent = `First Player to Reach ${pointLimit} Points Wins!!!`;
    alert(`Point limit set to ${pointLimit}`);
  } else {
    winner.textContent = `First Player to Reach ${pointLimit} Points Wins!!!`;
    alert("Please enter a valid number greater than 0");
  }
});

// Reset Game Function Logic
const ResetGame = () => {
  totalScore = [0, 0];
  score = [0, 0];

  document.querySelector(".total-score1").textContent = `Total Score: 0`;
  document.querySelector(".total-score2").textContent = `Total Score: 0`;
  document.querySelector(".score-1").textContent = 0;
  document.querySelector(".score-2").textContent = 0;

  document.querySelector(".dice-img").src = `./images/dice1.png`;
  document.querySelector(".dice-num").textContent = `Dice Number : 1`;

  dice.classList.add("dice1-highlight");
  player1.style.border = activePlayerBorder;
  player1.style.opacity = activePlayerOpacity;
  player2.style.border = inActivePlayerBorder;
  player2.style.opacity = inActivePlayerOpacity;

  winner.textContent = `First Player to Reach ${pointLimit} Points Wins!!!`;
  buttonCont.style.display = "block";
};

document.getElementById("replay").addEventListener("click", ResetGame);

const scoreDocuments = () => {
  document.querySelector(".score-1").textContent = score[0];
  document.querySelector(".score-2").textContent = score[1];
};

// Next Button Function Logic
const randomNumButton = () => {
  let randomNum = Math.floor(Math.random() * 6) + 1;

  //Dice Image Change based on the Random Number 1-6
  const diceImg = document.querySelector(".dice-img");
  diceImg.src = `./images/dice${randomNum}.png`;

  const diceNum = document.querySelector(".dice-num");
  diceNum.textContent = `Dice Number : ${randomNum}`;

  if (randomNum === 1) {
    switchPlayer();
  }

  if (currentPlayer === 1) {
    if (randomNum === 1) {
      randomNum = 0;
    }
    score[0] += randomNum;
    score[1] = 0;
    scoreDocuments();
  } else {
    if (randomNum === 1) {
      randomNum = 0;
    }
    score[1] += randomNum;
    score[0] = 0;
    scoreDocuments();
  }

  console.log("Scores:", score);
};

document.getElementById("next").addEventListener("click", randomNumButton);

// Swtich Player Function Logic
const switchPlayer = () => {
  currentPlayer = currentPlayer === 2 ? 1 : 2;
  console.log("Current Player:", currentPlayer);

  document.querySelector(
    ".current-player"
  ).textContent = `Current Player Turn: ${currentPlayer}`;

  player1.style.border =
    currentPlayer === 1 ? activePlayerBorder : inActivePlayerBorder;
  player1.style.opacity =
    currentPlayer === 1 ? activePlayerOpacity : inActivePlayerOpacity;
  player2.style.border =
    currentPlayer === 1 ? inActivePlayerBorder : activePlayerBorder;
  player2.style.opacity =
    currentPlayer === 1 ? inActivePlayerOpacity : activePlayerOpacity;
  dice.classList.add(`dice${currentPlayer}-highlight`);

  if (currentPlayer === 1) {
    dice.classList.remove("dice2-highlight");
    score[0] = 0;
  } else {
    dice.classList.remove("dice1-highlight");
    score[1] = 0;
  }

  document.querySelector(`.score-${currentPlayer}`).textContent = 0;
};

const totalScoreDoc = (currentP) => {
  let cur_player = currentP - 1;

  // Update total score
  totalScore[cur_player] += score[cur_player];
  document.querySelector(
    `.total-score${currentP}`
  ).textContent = `Total Score: ${totalScore[cur_player]}`;

  // Reset current turn score
  score[cur_player] = 0;
  document.querySelector(`.score-${currentP}`).textContent = 0;

  // High-score
  if (totalScore[cur_player] > highestScore) {
    highestScore = totalScore[cur_player];
    document.querySelector(
      ".highest-score"
    ).textContent = `Highest Score: ${highestScore}`;
  }

  // Progress bar visual
  const progressFill = document.querySelector(
    `.player${currentP}-score .progress-fill`
  );
  if (progressFill) {
    let percentage = Math.min((totalScore[cur_player] / pointLimit) * 100, 100);
    progressFill.style.width = `${percentage}%`;
  }

  // Winner display
  if (totalScore[cur_player] >= pointLimit) {
    winner.textContent = `Player ${currentP} WON !!!`;
    buttonCont.style.display = "none";
  }
};

const holdButton = () => {
  if (currentPlayer === 1) {
    totalScoreDoc(currentPlayer);
    switchPlayer();
  } else {
    totalScoreDoc(currentPlayer);
    switchPlayer();
  }

  console.log("TotalScore:", totalScore);
};

document.getElementById("hold").addEventListener("click", holdButton);
