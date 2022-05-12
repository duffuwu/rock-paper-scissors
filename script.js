function game() {

    let computerScore = 0,
        playerScore = 0

    function playRound() {

        let playerSelection = prompt("Choose between rock, paper or scissors").toLowerCase();

        function computerPlay() {
            let randomNumber = Math.floor(
                Math.random() * 3
                );
            let wordsArray = ['rock','paper','scissors'];
            return wordsArray[randomNumber];

            }

        let computerPick = computerPlay()

        if (playerSelection === computerPick) {
            return `Draw! Both picked ${playerSelection}`;
        }

        else if (
            (playerSelection === 'paper' && computerPick === 'rock') ||
            (playerSelection === 'rock' && computerPick === 'scissors') ||
            (playerSelection === 'scissors' && computerPick === 'paper')
        ) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerPick} \n 
            Player: ${playerScore} \n
            Computer: ${computerScore}`;
        }

        else {
            computerScore++;
            return `You lose! ${computerPick} beats ${playerSelection} \n
            Player: ${playerScore} \n
            Computer: ${computerScore}`;
        }
    }

    for (let i = 0; i <= 5; i++) {
        console.log(playRound())
    }

    if (playerScore === computerScore) {
        console.log("Final Result: DRAW!");
    }

    else if (playerScore > computerScore) {
        console.log("Final Result: PLAYER WINS")
    }

    else {
        console.log("Final Result: COMPUTER WINS")
    }
}

game()