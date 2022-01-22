import { solution } from "./randomWord.js";
import { gamePeices } from "../data/consts.js";
import { addGuess } from "./addGuess.js";
import { results } from "./results.js";

let correctWords = [];
let turns = 9;
let numOfCorrectLetters = 0;

for (let i = 0; i < solution.length; i++) {
  correctWords.push("_");
}

document.getElementById("guessArray").innerText = correctWords.join(" ");

export function hangMan(letter) {
  if (letter.charAt(1)) {
    return console.log("Only one letter at a time, please");
  }
  if (!solution.includes(letter)) {
    let peice = gamePeices.pop();
    document.getElementById(peice).classList.add(peice);
    turns--;
    addGuess(letter);
    if (turns < 1) {
      return results('LOSER!');
    }
    return console.log(`You have ${turns} left`);
  }
  if (solution.includes(letter)) {
    for (let i = 0; i < solution.length; i++) {
      if (solution[i] == letter) {
        correctWords[i] = letter;
        document.getElementById("guessArray").innerText = correctWords.join(" ");
        numOfCorrectLetters++;
        if (numOfCorrectLetters === solution.length) {
          return results('WINNER!');
        }
        console.log("1 letter right");
      }
    }
  }
  console.log(correctWords);
}


// console.log(rightLeg);  //whats up with this?

// if (turns == 9) {
//   document.getElementById("pole").classList.add("pole");
// }
// if (turns == 8) {
//   document.getElementById("topPole").classList.add("top-pole");
// }
// if (turns == 7) {
//   document.getElementById("rope").classList.add("rope");
// }
// if (turns == 6) {
//   document.getElementById("head").classList.add("head");
// }
// if (turns == 5) {
//   document.getElementById("body").classList.add("body");
// }
// if (turns == 4) {
//   document.getElementById("leftArm").classList.add("left-arm");
// }
// if (turns == 3) {
//   document.getElementById("rightArm").classList.add("right-arm");
// }
// if (turns == 2) {
//   document.getElementById("leftLeg").classList.add("left-leg");
// }
// if (turns == 1) {
//   document.getElementById("rightLeg").classList.add("right-leg");
// }
