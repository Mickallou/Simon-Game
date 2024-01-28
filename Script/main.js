let arrRound = [];
let gameCounter;
let userCounter;
gameCounter = userCounter = 0;

function playRound() {
    const newStep = createStep();
    arrRound.push(newStep);
    console.log('Computer:', arrRound);

    displayPattern();
    gameCounter++;
    document.getElementById('gameCounter').innerHTML = gameCounter;
}

function displayPattern() {
    let i = 0;
    const interval = setInterval(() => {
        changeColor(arrRound[i]);
        i++;
        if (i >= arrRound.length) {
            clearInterval(interval);
            userTurn();
        }
    }, 1000);
}

function userTurn() {
    userCounter = 0;
    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => {
        btn.addEventListener('click', theBtnClick);
    });
}

function theBtnClick(theColor) {
    const selectedColor = theColor.target.getAttribute('data-color');
    changeColor(selectedColor);

    if (selectedColor == arrRound[userCounter]) {
        userCounter++;

        if (userCounter === arrRound.length) {
            setTimeout(playRound, 1000);
        }
    } else {
        alert('You lose, Game Over!');
        arrRound = [];
        gameCounter = 0;
        userCounter = 0;
    }
}

function changeColor(color) {
    const btn = document.querySelector(`.btn[data-color="${color}"]`);
    btn.classList.add('highlight');

    setTimeout(() => {
        btn.classList.remove('highlight');
    }, 500);
}

function createStep() {
    return Math.floor(Math.random() * 4) + 1;
}

function startGame() {
    gameCounter = 0;
    arrRound = [];
    playRound();
}

const btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', startGame);

