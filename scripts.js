//gameBoard Module
const GameBoard = (function() {
    let grid = [
        '1','2','3',
        '4','5','6',
        '7','8','9'];

    const getGrid = () => {
        return grid;
    };

    const setPlay = (row, column, marker) => {
        grid[row][column] = marker;
    }

    const resetGrid = () => {
        grid = grid.forEach(position => '-');
    }
    //public variables
    return { getGrid, setPlay, resetGrid };
})();

//atm this works like GameBoard.getGrid()[1] for mid row and so on...

//Players Factory
const Player = (name, mark) => {
    let victories = 0;

    const addVictories = () => {
        victories += 1;
    }

    const getVictories = () => {
        return victories;
    }

    return { name, mark, addVictories, getVictories };
}

//DOM to get the cells and turning the elements onto an array
const table = document.querySelector('.board');
const tableGridsHTML = document.querySelectorAll('.cell');
const cells = [...tableGridsHTML];

function drawBoard() {
    for (let i = 0; i < 9; i++) {
        cells[i].innerHTML = GameBoard.getGrid()[i];
    }
}
// cells.forEach(btn => btn.innerHTML = GameBoard.getGrid());

//controller  - factory

//drawBoard func
//gameLogic
//scores

//AI moves

drawBoard();