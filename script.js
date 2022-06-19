const numberOfRounds = document.querySelector('.rounds-input [name="rounds"]');
const submitRounds = document.querySelector('.rounds-input [name="submit"]');
const forfeit = document.querySelector('.rounds-input [name="end-game"]');
const weapons = document.querySelectorAll('.options');
const weaponsOptions = document.querySelector('.weapons');
const information = document.querySelector('.information');
const playerScoreElement = document.querySelector('.scores [name="player-score-number"]');
const computerScoreElement = document.querySelector('.scores [name="computer-score-number"]');
const currentRoundElement = document.querySelector('.round h1');
const playerPick = document.querySelector('.player-pick p');
const PCPick = document.querySelector('.computer-pick p');
const confirmButton = document.querySelector('.player-pick button');

let computerScore = 0;
let playerScore = 0;

let rounds;
let currentRound = 1;
let playerSelection;
let winner;

function startRound(e) {

    playerSelection = e.target.name;
    playerPick.textContent = playerSelection;
    confirmButton.style.opacity = '100';
    confirmButton.addEventListener('click',playRound);
}

function playRound() {

    if (currentRound === rounds) {
        if (computerScore > playerScore) {
            winner = 'Computer';
        }

        else if (computerScore < playerScore) {
            winner = 'Player';
        }

        else {
            winner = 'Draw! No one';
        }

        currentRoundElement.textContent = `${winner} wins!`
        confirmButton.style.opacity = '0';
        confirmButton.removeEventListener('click',playRound);
        weapons.forEach(weapon => weapon.removeEventListener('click',playRound));
    }

    function computerPlay() {
        let randomNumber = Math.floor(
            Math.random() * 3
            );
        let wordsArray = ['rock','paper','scissors'];
        return wordsArray[randomNumber];

        }

    let computerPick = computerPlay()

    if (playerSelection === computerPick) {
        confirmButton.style.opacity = '0';
        confirmButton.removeEventListener('click',playRound);
        playerScore++;
        computerScore++;

        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        PCPick.textContent = computerPick;
        

        if (currentRound === rounds) return;

        currentRound++;
        currentRoundElement.textContent = `Round ${currentRound}`;
        
    }

    else if (
        (playerSelection === 'paper' && computerPick === 'rock') ||
        (playerSelection === 'rock' && computerPick === 'scissors') ||
        (playerSelection === 'scissors' && computerPick === 'paper')
    ) {
        confirmButton.style.opacity = '0';
        confirmButton.removeEventListener('click',playRound);
        playerScore++;
        playerScoreElement.textContent = playerScore;

        if (currentRound === rounds) return;

        currentRound++;
        currentRoundElement.textContent = `Round ${currentRound}`;
        PCPick.textContent = computerPick;
    }

    else {
        confirmButton.style.opacity = '0';
        confirmButton.removeEventListener('click',playRound);
        computerScore++;
        computerScoreElement.textContent = computerScore;
        
        if (currentRound === rounds) return;

        currentRound++;
        currentRoundElement.textContent = `Round ${currentRound}`;
        PCPick.textContent = computerPick;
    }

}

function showWeapons() {
    rounds = parseInt(numberOfRounds.value);

    if (rounds === 0 || rounds === '') {
        console.log('Choose number of rounds');
        return
    }

    currentRoundElement.textContent = `Round ${currentRound}`;
    weaponsOptions.style.opacity = '100';
    information.style.opacity = '100';
    weapons.forEach(weapon => weapon.addEventListener('click',startRound));   
}

function endGame() {
    computerScore = 0;
    playerScore = 0;
    currentRound = 1;

    let rounds;
    let playerSelection;
    let computerPick;

    numberOfRounds.value = '';
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;
    playerPick.textContent = playerSelection;
    PCPick.textContent = computerPick;
    currentRoundElement.textContent = `Round ${currentRound}`;
    weaponsOptions.style.opacity = '0';
    information.style.opacity = '0';
}

submitRounds.addEventListener('click',showWeapons);
forfeit.addEventListener('click',endGame);