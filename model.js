"use strict";

export const state = {
  allLetters: [
    `A`,
    `B`,
    `C`,
    `D`,
    `E`,
    `F`,
    `G`,
    `H`,
    `I`,
    `J`,
    `K`,
    `L`,
    `M`,
    `N`,
    `O`,
    `P`,
    `Q`,
    `R`,
    `S`,
    `T`,
    `U`,
    `V`,
    `W`,
    `X`,
    `Y`,
    `Z`,
  ],
  words: {},
  currentWord: ``,
  currentCategory: ``,
  curWordLetters: [],
  curWordSplit: {
    letters: {},
  },
};

const randomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

export const loadWord = async function (type) {
  const response = await fetch(`./words.json`);
  const data = await response.json();
  state.words = data;
  console.log(state.words);
};

export const chooseRandomWord = function (type) {
  state.currentCategory = type;
  const words = state.words[type];
  const len = words.length;
  state.currentWord = words[randomNumber(len)];
  state.curWordSplit = state.currentWord.split(``).reduce((acc, letter) => {
    return { ...acc, [letter]: false };
  }, {});
  state.curWordSplit[` `] = true;
  state.curWordLetters = state.currentWord.split(``);
};
