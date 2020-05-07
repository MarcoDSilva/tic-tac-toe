//gameBoard Module
const GameBoard = (function() {
    let grid = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']];

    const getGrid = () => {
        return grid;
    };

    const setPlay = (row, column, marker) => {
        grid[row][column] = marker;
    }

    const resetGrid = () => {
        grid = grid.forEach(position => '-');
    }

    const getWinCondition = () => {};

    const getDrawCondition = () => {};
    //public variables
    return { getGrid, setPlay, resetGrid, getWinCondition, getDrawCondition };
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

function drawBoard() {
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cellToPlay = document.createElement('td');
            cellToPlay.classList.add('cell');
            cellToPlay.innerText = GameBoard.getGrid()[i][j];
            cellToPlay.addEventListener('click', playTest);
            row.appendChild(cellToPlay);
        }
        table.appendChild(row);
    }
}

var i = 0;
function playTest() {
    if(i % 2 === 0) {
        this.innerHTML = 'X';
    } else {
        this.innerHTML = 'O';
    }
    i++;
};

// game controller - Module
const GameController = (function() {

});


//gameLogic
//scores
//AI moves

drawBoard();