const playerSelect = document.querySelectorAll('button');
const display = document.querySelector('.text');

function getComputerChoice(){
    const random =  Math.floor(Math.random() * 3);
    
    if(random === 0){
        return "rock";
    }else if(random === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection.value === "rock"){
        if(computerSelection.value === "scissors"){
            playerSelection.score += 1;
            return "You win! Rock beats Scissors";
        }   
        else if(computerSelection.value === "paper"){
            computerSelection.score += 1;
            return "You Lose! Paper beats Rock";
        }   
        else{
            return "You Tie!";
        }
    }
    else if(playerSelection.value === "paper"){
        if(computerSelection.value === "scissors"){

            computerSelection.score += 1;
            return "You Lose! Scissors beats Paper";
        }
        else if(computerSelection.value === "rock"){

            playerSelection.score += 1;
            return "You win! Paper beats Rock";
        }
        else{

            return "You Tie!";
        }
    }
    else if(playerSelection.value === "scissors"){
        if(computerSelection.value === "rock"){

            playerSelection.score += 1;

            return "You win! Rock beats Scissors";

        }
        else if(computerSelection.value === "paper"){

            computerSelection.score += 1;

            return "You Lose! Paper beats Rock";

        }
        else {
            return "You Tie!";
        }
    }
  }

  const computerChoice = { value: "", score: 0 };
  const playerChoice = { value: "", score: 0 };
  

  function game(){

    computerChoice.value = getComputerChoice();
    
    const result = playRound(playerChoice, computerChoice);
    display.innerHTML =`Computer chose ${computerChoice.value}
    Player chose ${playerChoice.value}
    Player score is ${playerChoice.score}
    Result is ${result}
    Computer score is ${computerChoice.score}`;
  
}

playerSelect.forEach(player => player.addEventListener('click', () => {

    playerChoice.value = player.classList.value;
    game();

  }));

/*if(playerChoice.score > computerChoice.score){
    console.log("You win! the game");
}
else if(playerChoice.score < computerChoice.score){
    console.log("You Lose! the game");
}
else if(playerChoice.score === computerChoice.score){
    console.log("You Tie!");
}*/
