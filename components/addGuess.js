export function addGuess(guess) {
    let gridBox = document.getElementById("guessGrid");
    let guessBox = document.createElement("p");
    guessBox.classList.add("guess");
    guessBox.innerText = guess;
    gridBox.appendChild(guessBox);
  }