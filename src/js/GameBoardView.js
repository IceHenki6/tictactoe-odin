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
    cells.forEach((cell) => {if(cell.classList.contains('test')){cell.classList.remove('test')}});
}


const clearBoard = ()=>{
    cells.forEach(cell => cell.textContent = '');
    clearHighlightedArea();
} 


restartBtn.addEventListener('click', clearBoard);

const highlightRow = (index)=>{
    index *= 3;
    for(let i=index; i < index + 3; i++){
        cells[i].classList.add('test');
    }
}

const highlightColumn = (index)=>{
    for(let i = 0; i<3; i++){
        cells[index].classList.add('test');
        index += 3;
    }
}

const highlightDiagonal = (index)=>{
    if(index == 0){
        cells[0].classList.add('test');
        cells[4].classList.add('test');
        cells[8].classList.add('test');
    }else if(index==2){
        cells[2].classList.add('test');
        cells[4].classList.add('test');
        cells[6].classList.add('test');
    }
}

export default {interaction,clearBoard, highlightRow, highlightColumn, highlightDiagonal, showPlayer};


