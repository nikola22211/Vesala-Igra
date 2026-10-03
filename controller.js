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

const controlGuess = function (btn) {
  const letter = btn.dataset.letter;
  btn.disabled = true;
  btn.style.opacity = 0.5;
  btn.classList.add(`btn_disabled`);
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
    gameLost();
  }
  if (Object.values(model.state.curWordSplit).every((el) => el)) {
    gameWon();
  }
};

const formaHelper = function () {
  const forma = document.querySelector(`.forma`);
  forma.classList.remove(`hiddenReal`);
  return forma;
};

const gameWon = function () {
  const forma = formaHelper();
  forma.querySelector(`.you-won`).textContent = `YOU WON`;
  forma.style.backgroundColor = `green`;
};

const gameLost = function () {
  const forma = formaHelper();
  forma.querySelector(`.you-won`).textContent = `YOU LOST`;
  forma.style.backgroundColor = `red`;
};

const controlNewGame = function () {
  document.querySelector(`.forma`).classList.add(`hiddenReal`);
  document.getElementById(`progress-bar`).value = 100;
  initHelper();
};

const init = function () {
  initHelper(); //OVO CE BITI ASINHRONA FUNKCIJA

  guessingView.guess(controlGuess);
  newGameView.newGame(controlNewGame);
};

const initHelper = function () {
  model.loadWord();
  controlAllLetters();
  controlWordLetters();
};
init();
