const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("user-answer");
const hintText = document.querySelector(".hint");
const secretNumberEl = document.getElementById("secretNumber");
const numOfGuess = document.querySelector(".number-of-guess");
const replayButtonEl = document.querySelector(".replay-btn");
const playButtonEl = document.querySelector(".play-btn");

// Initial UI state
replayButtonEl.style.display = "none";
guessForm.style.display = "none";

// Generate random number (1–20)
const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log("Random Number:", randomNumber);
  return randomNumber;
};

// Game state
let secretNumber = generateRandomNumber();
let guessCount = 0;
let highScore = 0;

// UI helpers
const updateHint = (text, color = "") => {
  hintText.textContent = text;
  hintText.style.color = color;
};

const updateHighScore = () => {
  if (highScore === 0 || guessCount <= highScore) {
    highScore = guessCount;
    document.querySelector(
      ".high-score"
    ).innerHTML = `High Score: <span>${highScore}</span>`;
  }
  guessCount = 0;
};

// Play button handler
const handlePlay = () => {
  guessForm.style.display = "block";
  replayButtonEl.style.display = "block";
  playButtonEl.style.display = "none";
};

playButtonEl.addEventListener("click", handlePlay);

// Replay button handler
const handleReplay = () => {
  secretNumber = generateRandomNumber();
  guessForm.style.display = "block";
  numOfGuess.style.display = "block";
  updateHint("Hint: Start guessing...");
  secretNumberEl.textContent = "?";
  guessCount = 0;
};

replayButtonEl.addEventListener("click", handleReplay);

// Form submit logic
guessForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userGuess = Number(guessInput.value);
  console.log("User Guess:", userGuess);

  if (userGuess === secretNumber) {
    updateHint("👌Number Guessed Correctly! ✅", "#22c55e");
    secretNumberEl.textContent = secretNumber;
    guessForm.style.display = "none";
    numOfGuess.style.display = "none";
    guessCount++;

    updateHighScore();
  } else if (userGuess > secretNumber) {
    updateHint("Hint: ↙️ Number is lower than your guess", "#449fefff");
    guessCount++;
  } else if (userGuess < secretNumber) {
    updateHint("Hint: ↗️ Number is higher than your guess", "#ef8b44ff");
    guessCount++;
  } else {
    console.log("Error Occurred");
  }

  numOfGuess.textContent = `Number of Guesses: ${guessCount}`;

  // Reset input
  guessInput.value = "";
  guessInput.focus();
});
