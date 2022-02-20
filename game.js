let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

game();

//Main Functions
function game() {
    let winner = "";

    for (let i = 0; i < 5; i++) {
        if (i!= 0) console.log("---")
        if (i == 0 ) playerSelection = window.prompt("Best of 5, rock, paper or scissors?: ").toLowerCase();
        else playerSelection = window.prompt(`Round ${i + 1} rock, paper or scissors?: `).toLowerCase();
        console.log(`You choose ${playerSelection}`);
        computerPlay();
        console.log(`The computer chooses ${computerSelection}`);
        result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (i != 4) console.log(`Current Score: ${playerScore} to ${computerScore}`)
     }

     if (playerScore > computerScore) console.log(`You win the game! ${playerScore} to ${computerScore}`)
     else if (playerScore < computerScore) console.log(`You loose the game! ${playerScore} to ${computerScore}`)
     else console.log(`You tied! ${playerScore} to ${computerScore}`)

     playerScore = 0;
     computerScore = 0;
}

function playRound(playerSelection, computerSelection) {
    //Tie
    if (playerSelection == computerSelection) return `You tie! ${playerSelection} ties ${computerSelection}`

    //Player Wins
    if ( (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
        

    //Player Looses (all others)
    computerScore++;
    return `You Loose! ${playerSelection} is beaten by ${computerSelection}`;
}

function computerPlay() {
    let computerSelectionInt = getRandomIntInclusive(0, 2);
    computerSelection = convertScoreToStr(computerSelectionInt);
}   

//Helper Functions
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function convertScoreToStr(score) {
    if (score == 0) return "rock";
    else if (score == 1) return "paper";
    else if (score == 2) return "scissors"
}