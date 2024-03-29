const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    // this code renders the user choice
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice // this line rewrites the user choice, value of uerChoice variable is assigned to userChoiceDisplay using innerHTML

    // this code generates computer choice
    generateComputerChoice()

    // this function displays result
    getResult()
})) 

function generateComputerChoice() { // this function generated and renders computer choices
    const randomNumber = Math.floor(Math.random() * 3 + 1) // instead of using 3, we could also write possibleChoices.length
    
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() { // checking all possible outcomes
    if(computerChoice === userChoice) {
        result = 'Draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lost!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!'
    }
    
    resultDisplay.innerHTML = result
    
}