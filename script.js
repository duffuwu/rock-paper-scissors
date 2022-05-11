function ComputerPlay() {
    let randomNumber = Math.floor(
        Math.random() * 3
        )
    let wordsArray = ['rock','paper','scissors']
    return wordsArray[randomNumber]
}

function singleRound(playerSelection,computerSelection) {
    let player = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return `Draw! Both picked ${playerSelection}`
    }

    else if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

    else {
        return `You lose! ${playerSelection} beats ${computerSelection}`
    }
}