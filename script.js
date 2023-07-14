const playerSelect = document.querySelectorAll('button');
const display = document.querySelector('.text');
const playerScore = document.querySelector('.Player-Score');
const computerScore = document.querySelector('.Computer-Score');

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
            return "You win! You chose Rock and Computer chose Scissors";
        }   
        else if(computerSelection.value === "paper"){
            computerSelection.score += 1;
            return "You Lose! You chose Rock and Computer chose Paper";
        }   
        else{
            return "You Tie! You both selected Rock";
        }
    }
    else if(playerSelection.value === "paper"){
        if(computerSelection.value === "scissors"){

            computerSelection.score += 1;
            return "You Lose! You chose Paper and Computer chose Scissors";
        }
        else if(computerSelection.value === "rock"){

            playerSelection.score += 1;
            return "You win! You chose Paper and Computer chose Rock";
        }
        else{

            return "You Tie! You both selected Paper";
        }
    }
    else if(playerSelection.value === "scissors"){
        if(computerSelection.value === "rock"){

            playerSelection.score += 1;

            return "You Lose! You chose Scissors and Computer chose Rock";

        }
        else if(computerSelection.value === "paper"){

            computerSelection.score += 1;

            return "You Lose! You chose Scissors and Computer chose Paper";

        }
        else {
            return "You Tie! You both selected Scissors";
        }
    }
  }

  const computerChoice = { value: "", score: 0 };
  const playerChoice = { value: "", score: 0 };
  

  function game(){

    computerChoice.value = getComputerChoice();
    
    const result = playRound(playerChoice, computerChoice);
    playerScore.innerHTML = `${playerChoice.score}`;
    computerScore.innerHTML = `${computerChoice.score}`;
    display.innerHTML = result;

    if(playerChoice.score=== 5 ){

        display.innerHTML = "You Won the game! Congratulations!";
        playerChoice.score = 0;
        computerChoice.score = 0;
        playerScore.innerHTML = "0";
        computerScore.innerHTML = "0";
    
      }
      else if(computerChoice.score=== 5){
        display.innerHTML = "Computer won the game! Please try again!";
        playerChoice.score = 0;
        computerChoice.score = 0;
        playerScore.innerHTML = "0";
        computerScore.innerHTML = "0";
    
      }
  
}

playerSelect.forEach(player => player.addEventListener('click', () => {

    playerChoice.value = player.classList.value;
    game();

  }));

 