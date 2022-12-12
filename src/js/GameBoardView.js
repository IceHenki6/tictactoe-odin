import GameBoard from "./GameBoard.js";

const cells = document.querySelectorAll('.cell');


const showPlayer = (player)=>{
    const playerName = document.querySelector('#player-name');

    playerName.textContent = '';
    playerName.textContent = player.name;
}

const interaction = (event, player) =>{
    let playerOnTurn = player;
    if(event.target.textContent==''){
        event.target.textContent = playerOnTurn.symbol;
        console.log(`Turn: ${playerOnTurn.name}`);
    }

    GameBoard.loadBoard(cells);
}

const restartBtn = document.getElementById('restart-btn');

const clearHighlightedArea = ()=>{
    cells.forEach((cell) => {if(cell.classList.contains('highlighted-area')){cell.classList.remove('highlighted-area')}});
}


const clearBoard = ()=>{
    cells.forEach(cell => cell.textContent = '');
    clearHighlightedArea();
} 


restartBtn.addEventListener('click', clearBoard);

const highlightRow = (index)=>{
    index *= 3;
    for(let i=index; i < index + 3; i++){
        cells[i].classList.add('highlighted-area');
    }
}

const highlightColumn = (index)=>{
    for(let i = 0; i<3; i++){
        cells[index].classList.add('highlighted-area');
        index += 3;
    }
}

const highlightDiagonal = (index)=>{
    if(index == 0){
        cells[0].classList.add('highlighted-area');
        cells[4].classList.add('highlighted-area');
        cells[8].classList.add('highlighted-area');
    }else if(index==2){
        cells[2].classList.add('highlighted-area');
        cells[4].classList.add('highlighted-area');
        cells[6].classList.add('highlighted-area');
    }
}

export default {interaction,clearBoard, highlightRow, highlightColumn, highlightDiagonal, showPlayer};


