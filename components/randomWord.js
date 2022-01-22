import { words } from "../data/consts.js";

function getRandomInt() {
  return Math.floor(Math.random() * 48);
}

function randomWord() {
  let word = words[getRandomInt()];
  return word;
}

export let solution = randomWord()

