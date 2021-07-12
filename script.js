const gameBoard = { game: new Array(9) };
const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile, index) => {
    tile.addEventListener('click', function () {
        if (tile.textContent === '') {
            tile.textContent = 'X';
            gameBoard.game[index] = tile.textContent    
        }
    })
})

function computerPlay() {
    let n = Math.floor(Math.random() * 9);
    const stop = () => {
        const isfull = item => item.textContent !== '';
        return Array.from(tiles).every(isfull);
    }
    if (stop()) return;
    if (tiles[n].textContent === '') {
        tiles[n].textContent = 'O';
        gameBoard.game[n] = tiles[n].textContent;
        return
    } 
    computerPlay();
};

function gameSession(X, O) {
    
}

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
            console.log(`XO Draw!!!`);
            break;
    }
}
