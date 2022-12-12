import GameBoardView from "./GameBoardView.js";

const displayWinner = (player)=>{
    const displayContainer = document.getElementById('game-result');
    displayContainer.classList.remove('hidden');
    const display = document.createElement('div');
    display.id = 'displayed-result';
    display.innerHTML = `
        <h1><span>${player}</span> wins!</h1>
        <button id="new-game" class="new-game button">New Game</button>
    `;

    displayContainer.appendChild(display);
    const playerName = document.getElementById('player-name');
    playerName.textContent = '';
}

const displayTie = ()=>{
    const displayContainer = document.getElementById('game-result');
    displayContainer.classList.remove('hidden');
    const display = document.createElement('div');
    display.id = 'displayed-result';
    display.innerHTML = `
        <h1>Tie!</h1>
        <button id="new-game" class="new-game button">New Game</button>
    `;

    displayContainer.appendChild(display);
    const playerName = document.getElementById('player-name');
    playerName.textContent = '';
}

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('new-game')){
        const displayContainer = document.getElementById('game-result');
        displayContainer.classList.add('hidden');
        GameBoardView.clearBoard();
        event.target.parentElement.remove();
    }
})
export default {displayWinner, displayTie};