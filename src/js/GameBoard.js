let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
];


const loadBoard = (boardArr)=>{
    let boardIndex = 0;
    for(let i=0; i<gameBoard.length; i++){
        for(let j=0;j<gameBoard[i].length;j++){
            gameBoard[i][j] = boardArr[boardIndex].textContent;
            boardIndex++;
        }
    }
}

const areCellsComplete = ()=>{
    let cellsFilled = 0;

    for(let i = 0; i<gameBoard.length; i++){
        for(let j=0; j<gameBoard[i].length; j++){
            if(gameBoard[i][j]!= ''){
                cellsFilled++;
            }    
        }
    }

    return cellsFilled === 9;
}

const checkRows = ()=>{
    let win = false;
    let mark = '';
    let winningRow = 0;
    for(let i=0; i<gameBoard.length; i++){
        for(let j=0;j<gameBoard[i].length;j++){
            mark = gameBoard[i][0];
            if(mark != '' && mark == gameBoard[i][j]){
                win = true;
            }else{
                win = false;
                break;
            }
        }
        if(win){
            winningRow = i;
            console.log(`Winning row: ${winningRow}`);
            break;
        }
    }
    return {win, mark, winningRow};
}

const checkColumns = ()=>{
    let win = false;
    let mark = '';
    let winningColumn = 0;
    for(let i=0; i<gameBoard.length; i++){
        for(let j=0;j<gameBoard[0].length;j++){
            mark = gameBoard[0][i];
            if(mark != '' && mark == gameBoard[j][i]){
                win = true;
            }else{
                win = false;
                break;
            }
        }
        if(win){
            winningColumn = i;
            console.log(`Winning column: ${winningColumn}`);
            break;
        }
    }
    return {win, mark, winningColumn};
}

const checkDiagonals = ()=>{
    let win = false;
    let mark = gameBoard[0][0];
    let winningDiagonal = 0;  

    if(mark != '' && gameBoard[1][1] == mark && gameBoard[2][2] == mark){
        console.log(gameBoard[1][1] + ' ' + mark)
        win = true;
        winningDiagonal = 0;
    }else if(gameBoard[0][2]!=''){
        mark = gameBoard[0][2];
        if(gameBoard[1][1] == mark && gameBoard [2][0] == mark){
            win = true;
            winningDiagonal = 2;
        }
    }

    return {win, mark, winningDiagonal};
}


export default {gameBoard,checkRows, loadBoard, checkColumns, checkDiagonals, areCellsComplete};