import GameBoard from "./GameBoard.js";
import GameBoardView from "./GameBoardView.js";
import GameResult from "./GameResult.js";
import Player from "./Player.js";


const game = document.querySelector('.game');
const gameGrid = document.querySelector('#grid-container');

const gameStart = document.getElementById('start-game__form');


const player1 = Player.createPlayer('Player1', 'X');
const player2 = Player.createPlayer('Player2', 'Y');

// let playerOnTurn = null;
// gameStart.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     game.classList.remove('hidden');
//     gameStart.classList.add('hidden');

//     player1 = Player.createPlayer(document.getElementById('player1').value, 'X');
//     player2 = Player.createPlayer(document.getElementById('player2').value, 'Y');

//     playerOnTurn = player1;
//     GameBoardView.showPlayer(playerOnTurn);
// })

// const myGameBoard = GameBoard();

console.log(GameBoard);
let playerOnTurn = player1;

gameGrid.addEventListener('click', (event)=>{
    GameBoardView.interaction(event, playerOnTurn);
    const rowsChecked = GameBoard.checkRows();
    const columnsChecked = GameBoard.checkColumns();
    const diagonalsChecked = GameBoard.checkDiagonals();

    

    if(rowsChecked.win){
        console.log(`Win on row player ${rowsChecked.mark}`);
        GameResult.displayWinner(playerOnTurn.name);
        GameBoardView.highlightRow(rowsChecked.winningRow);
        
    }else if(columnsChecked.win){
        console.log(`Win on column player ${columnsChecked.mark}`);
        GameResult.displayWinner(playerOnTurn.name);
        GameBoardView.highlightColumn(columnsChecked.winningColumn);
    }else if(diagonalsChecked.win){
        console.log(`Win on diagonal player ${diagonalsChecked.mark}`);
        GameResult.displayWinner(playerOnTurn.name);
        GameBoardView.highlightDiagonal(diagonalsChecked.winningDiagonal);
    }else if (GameBoard.areCellsComplete()){
        GameResult.displayTie();
    }

    if(playerOnTurn==player1){
        playerOnTurn = player2;
    }else{
        playerOnTurn = player1;
    }
    GameBoardView.showPlayer(playerOnTurn);
})







