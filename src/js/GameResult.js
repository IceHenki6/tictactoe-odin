import GameBoardView from "./GameBoardView.js";

const displayWinner = (player)=>{
    const displayContainer = document.getElementById('game-result');
    const display = document.createElement('div');
    display.id = 'displayed-result';
    display.innerHTML = `
        <h1>Player ${player} won!</h1>
        <button class="new-game">New Game</button>
        <button id="exit-btn">Exit</button>
    `;

    displayContainer.appendChild(display);
    const playerName = document.getElementById('player-name');
    playerName.textContent = '';
}

const displayTie = ()=>{
    const displayContainer = document.getElementById('game-result');
    const display = document.createElement('div');
    display.id = 'displayed-result';
    display.innerHTML = `
        <h1>Tie!</h1>
        <button class="new-game">New Game</button>
        <button id="exit-btn">Exit</button>
    `;

    displayContainer.appendChild(display);
    const playerName = document.getElementById('player-name');
    playerName.textContent = '';
}

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('new-game')){
        GameBoardView.clearBoard();
        event.target.parentElement.remove();
    }
})
export default {displayWinner, displayTie};