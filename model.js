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
  words: [`ABB`, `BAA`],
  currentWord: ``,
  curWordLetters: [],
  curWordSplit: {
    letters: {},
  },
};

const randomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

export const loadWord = function () {
  const len = state.words.length;
  state.currentWord = state.words[randomNumber(len)];
  state.curWordSplit = state.currentWord.split(``).reduce((acc, letter) => {
    return { ...acc, [letter]: false };
  }, {});
  state.curWordSplit[` `] = true;
  state.curWordLetters = state.currentWord.split(``);
};
