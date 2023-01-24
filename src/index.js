"use strict";

const highestNumber = 1000;
const lowestNumber = 1;
const maxGuessCount = 10;
let randomNumber = Math.floor(Math.random() * highestNumber) + lowestNumber;

const infoText = document.querySelector(".info-text");
infoText.textContent = `We have selected a random number between ${lowestNumber} and ${highestNumber}. See if you can guess it in ${maxGuessCount} turns or fewer. We will tell you if your guess was too high or too low.`;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

let timerStart = Date.now();

const numbers = [];
for (let i = 0; i <= highestNumber; i++) {
  numbers.push(i);
}
const findNumber = () => {
  let start = 0;
  let end = numbers.length - 1;
  while (start <= end && guessCount <= maxGuessCount) {
    //Middle point is the median betwene the highest and lowest possible correct value
    let middle = Math.ceil((start + end) / 2);

    if (randomNumber === numbers[middle]) {
      guessField.value = middle;
      checkGuess();
      return console.log(
        `!FOUND! => middle: ${middle}, randomNumber: ${randomNumber}`
      );
    }
    //if the value is higher than the initial middle value, the algorithm will search a new middle value between the original, and the maximum correct value
    if (randomNumber > numbers[middle]) {
      start = middle + 1;
      guessField.value = middle;
      checkGuess();
    }
    //if the value is lower than the initial middle value, the algorithm will search a new middle value between the original, and the minimum correct value
    if (randomNumber < numbers[middle]) {
      end = middle - 1;
      guessField.value = middle;
      checkGuess();
    }
  }
};
findNumber();

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === maxGuessCount) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);

  let timerEnd = (Date.now() - timerStart) / 1000;
  //simply using lowOrHi's empty field to fill it with game timer
  console.log(timerEnd);
  lowOrHi.textContent =
    "Time taken to finish the game: " +
    timerEnd +
    " seconds." +
    "Total guesses: " +
    guessCount;
}

function resetGame() {
  timerStart = Date.now();
  guessCount = 1;
  const resetParas = document.querySelectorAll(".bestguess p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * highestNumber) + lowestNumber;
}
