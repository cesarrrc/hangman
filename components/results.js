export function results(outcome){
    
    let resultContainer = document.getElementById("resultContainer")
    resultContainer.classList.add('resultContainer')
    
    let result = document.getElementById("result")
    result.classList.add('result')
    result.innerText = outcome
    
    let matchResult = document.getElementById("matchResult")
    let button = document.createElement('button')
    button.innerText = "Play Again"
    button.classList.add('reset')
    button.addEventListener('mousedown', ()=>{location.reload()})
    
    matchResult.classList.add('matchResult')
    matchResult.appendChild(button)

}
