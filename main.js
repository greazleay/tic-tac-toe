const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const script = document.createElement('script');
script.src = './script.js';
body.appendChild(script);

const btns = document.createElement('div');
btns.classList.add('btns');
container.appendChild(btns);

const addBtn = (text, parent) => {
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = text;
    parent.appendChild(btn);
}

addBtn('X', btns);
addBtn('O', btns);

const board = document.createElement('div');
board.classList.add('board');
container.appendChild(board);

const addTile = () => {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    board.appendChild(tile);
}

for (let i = 0; i < 9; i++) {
    addTile()
}

const final = document.createElement('div');
final.classList.add('final');
container.appendChild(final);

const wins = document.createElement('p');
final.appendChild(wins);

addBtn('Restart', final)

