import * as readline from 'node:readline';
import {randomWord} from '../components/randomWord.js'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let solution = randomWord().split("");
let correctWords = [];
let turns = 6;
for (let i = 0; i < solution.length; i++) {
  correctWords.push("_");
}
console.log(solution);

function hangMan(letter) {
  if (letter.charAt(1)) {
    return console.log("Only one letter at a time, please");
  }
  if (!solution.includes(letter)) {
    turns--;
    if (turns < 1) {
      return console.log("You Lose");
    }
    return console.log(`You have ${turns} left`);
  }
  if (solution.includes(letter)) {
    // correctWords[solution.indexOf(letter)] = letter;
    for (let i = 0; i < solution.length; i++) {
      if (solution[i] == letter) {
        console.log(solution[i] + "==" + letter);
        correctWords[i] = letter;
        console.log(correctWords);
      }
    }
    checkWin()
    console.log(solution.indexOf(letter));
    console.log("1 letter right");
    console.log(correctWords);
  }
}

function checkWin(){
    if(solution.join("") === correctWords.join(""))
    console.log('solution: ', solution.join(""))
}

const getPrompt = () => {
  rl.question("Gimme a word ", (guess) => {
    hangMan(guess);
    getPrompt();
  });
};

getPrompt();

export {hangMan}