'use strict';

const gameBoard = { ai: new Array(9), human: new Array(9) };
const tiles = document.querySelectorAll('.tile');
const restart = final.querySelector('.btn');

function player(e) {
    if (checkWinner('O')) {
        return;
    }
    if (e.target.textContent === '') {
        e.target.textContent = 'X';
        e.target.style.color = 'red';
        gameBoard.ai[Array.from(tiles).indexOf(e.target)] = e.target.textContent;
    }
     return checkWinner('X')
}

function computerPlay() {
    if (checkWinner('X')) {
        return;
    }
    let n = Math.floor(Math.random() * 9);
    if (filled()) return;
    if (tiles[n].textContent === '') {
        tiles[n].textContent = 'O';
        tiles[n].style.color = 'yellow';
        gameBoard.ai[n] = tiles[n].textContent;
        return checkWinner('O');
    } 
    computerPlay();
};

function filled() {
    const isfull = item => item.textContent !== '';
    return Array.from(tiles).every(isfull);
}

function checkWinner(p) {
    const a = gameBoard.ai
    const isPlayer = (currentItem) => currentItem === p;

    switch (true) {
        case [a[0],a[1],a[2]].every(isPlayer):
        case [a[3],a[4],a[5]].every(isPlayer):
        case [a[6],a[7],a[8]].every(isPlayer):
        case [a[0],a[3],a[6]].every(isPlayer):
        case [a[1],a[4],a[7]].every(isPlayer):
        case [a[2],a[5],a[8]].every(isPlayer):
        case [a[0],a[4],a[8]].every(isPlayer):
        case [a[2],a[4],a[6]].every(isPlayer):
            wins.textContent = `Player ${p} Wins`
            return true
        default:
            return false;
    }
}

function gameRound() {
    switch (wins.textContent) {
        case 'Player X Wins' :
        case 'Player O Wins' :
            wins.textContent += ', Game Over';
            restart.style.display = 'inline-block';
            tiles.forEach(tile => {
                tile.removeEventListener('click', gameSession)
            })    
            return;
        default:
            if (filled()) {
                wins.textContent = `Draw!!! XO`;
                restart.style.display = 'inline-block';
            }     
            return;
    }
}
  
async function gameSession(e) { 
    player(e);
    await new Promise(resolve => setTimeout(resolve, 500));
    computerPlay();
    gameRound();
}

tiles.forEach(tile => {
    tile.addEventListener('click', gameSession)
})

restart.addEventListener('click', () => {
    location.reload()
})
