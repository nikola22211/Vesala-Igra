"use strict";
import * as model from "./model.js";
import renderAllLettersView from "./view/renderAllLettersView.js";
import renderWordLetters from "./view/renderWordLettersView.js";
import guessingView from "./view/guessingView.js";
import newGameView from "./view/newGameView.js";

const controlAllLetters = function () {
  renderAllLettersView.render(model.state.allLetters);
};

const controlWordLetters = function () {
  renderWordLetters.render(model.state.curWordLetters);
};

const buttonManipulation = function (btn) {
  btn.disabled = true;
  btn.style.opacity = 0.5;
  btn.classList.add(`btn_disabled`);
};

const controlGuess = function (btn) {
  const letter = btn.dataset.letter;
  buttonManipulation(btn);
  const divLetters = document.querySelectorAll(`.${letter}x`);
  [...divLetters].forEach((el) => {
    el.classList.remove(`hidden`);
  });

  const progressBar = document.querySelector(`#progress-bar`);
  if (letter in model.state.curWordSplit) {
    model.state.curWordSplit[letter] = true;
  } else {
    progressBar.value -= 20;
  }
  if (progressBar.value === 0) {
    gameOver(`LOST`, `red`);
  }
  if (Object.values(model.state.curWordSplit).every((el) => el)) {
    gameOver(`WON`, `green`);
  }
};

const formaHelper = function () {
  const forma = document.querySelector(`.forma`);
  forma.classList.remove(`hiddenReal`);
  return forma;
};

const gameOver = function (state, color) {
  const forma = formaHelper();
  forma.querySelector(`.you-won`).textContent = `YOU ${state}`;
  forma.style.backgroundColor = color;
  document.querySelectorAll(`.btn`).forEach((el) => (el.disabled = true));
};

const controlNewGame = function () {
  document.querySelector(`.forma`).classList.add(`hiddenReal`);
  document.getElementById(`progress-bar`).value = 100;
  initHelper();
};

const init = async function () {
  await model.loadWord(`countries`);

  initHelper();

  guessingView.guess(controlGuess);
  newGameView.newGame(controlNewGame);
};

const initHelper = function () {
  model.chooseRandomWord();
  controlAllLetters();
  controlWordLetters();
};
init();
