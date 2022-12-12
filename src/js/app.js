import GameBoard from "./GameBoard.js";
import GameBoardView from "./GameBoardView.js";
import GameResult from "./GameResult.js";
import Player from "./Player.js";


const gameGrid = document.querySelector('#grid-container');



const player1 = Player.createPlayer('Player 1', 'X');
const player2 = Player.createPlayer('Player 2', 'Y');


let playerOnTurn = player1;
GameBoardView.showPlayer(playerOnTurn);

gameGrid.addEventListener('click', (event)=>{
    if(event.target.textContent == ''){
        GameBoardView.interaction(event, playerOnTurn);
        const rowsChecked = GameBoard.checkRows();
        const columnsChecked = GameBoard.checkColumns();
        const diagonalsChecked = GameBoard.checkDiagonals();
    
        
    
        if(rowsChecked.win){
            GameResult.displayWinner(playerOnTurn.name);
            GameBoardView.highlightRow(rowsChecked.winningRow);
            
        }else if(columnsChecked.win){
            GameResult.displayWinner(playerOnTurn.name);
            GameBoardView.highlightColumn(columnsChecked.winningColumn);
        }else if(diagonalsChecked.win){
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
    }
})







