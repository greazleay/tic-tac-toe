const gameBoard = { ai: new Array(9) };
const tiles = document.querySelectorAll('.tile');

function gameRound(X, O) {
    switch (true) {
        case (X === 'Player X Wins') :
        case (O === 'Player O Wins') :
            console.log(`Game Over`)    
            break;
        default:
            break;
    }
}

const gameSession = (e) => { gameRound(player(e), computerPlay())}

tiles.forEach(tile => {
    tile.addEventListener('click', gameSession)
})

function player(e) {
    if (e.target.textContent === '') {
        e.target.textContent = 'X';
        e.target.style.color = 'red';
        gameBoard.ai[Array.from(tiles).indexOf(e.target)] = e.target.textContent;
    }
     return checkWinner(gameBoard.ai, 'X')
}

function computerPlay() {
    let n = Math.floor(Math.random() * 9);
    const stop = () => {
        const isfull = item => item.textContent !== '';
        return Array.from(tiles).every(isfull);
    }
    if (stop()) return;
    if (tiles[n].textContent === '') {
        tiles[n].textContent = 'O';
        gameBoard.ai[n] = tiles[n].textContent;
        return checkWinner(gameBoard.ai, 'O');
    } 
    computerPlay();
};

function checkWinner(a, p) {
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
            console.log(`Player ${p} Wins`);
            break;
        default:
            break;
    }
}
