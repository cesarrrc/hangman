import { topKeys, midKeys, botKeys } from "../data/consts.js";
import { hangMan } from "./hangman.js";

let alphabetContainer = document.getElementById("alphabetContainer");
let keyBoard = [topKeys, midKeys, botKeys];

export function keyboard() {
  function handleClick(e) {
    hangMan(e.target.id);
    e.target.style.pointerEvents = "none"
    e.target.style.backgroundColor = "gray"
    console.log(e.target)
  }
  console.log(alphabetContainer, keyBoard);
  keyBoard.map((row) => {
    let rowElement = document.createElement("div");
    rowElement.setAttribute("id", "rows");
    rowElement.classList.add("row");
    alphabetContainer.appendChild(rowElement);
    row.map((letter) => {
      let letterElement = document.createElement("div");
      letterElement.setAttribute("id", letter);
      let capLetter = letter.toUpperCase();
      letterElement.innerText = capLetter;
      letterElement.addEventListener("mousedown", (e) => {
        handleClick(e);
      });
      rowElement.appendChild(letterElement);
    });
  });
}
