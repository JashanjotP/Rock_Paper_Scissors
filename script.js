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
  for (let i = 0; i < 5; i++) {

    computerChoice.value = getComputerChoice();
    playerChoice.value = prompt("Enter rock, paper, or scissors").toLowerCase();
    const result = playRound(playerChoice, computerChoice);
    console.log(`Computer chose ${computerChoice.value}
    Player chose ${playerChoice.value}
    Player score is ${playerChoice.score}
    Result is ${result}
    Computer score is ${computerChoice.score}`);
  }
}

game();

if(playerChoice.score > computerChoice.score){
    console.log("You win! the game");
}
else if(playerChoice.score < computerChoice.score){
    console.log("You Lose! the game");
}
else{
    console.log("You Tie!");
}
