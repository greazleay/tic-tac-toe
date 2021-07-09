const gameBoard = { game: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'] }

const Player = () => {

    return {}
}

function gamePlay() {
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile, index) => {
        tile.textContent = gameBoard.game[index]
    })
}

gamePlay()