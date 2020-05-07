//gameBoard Module
const GameBoard = (function() {
    let grid = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ];

    const getGrid = () => {
        return grid;
    };

    const setPlay = (row, column, marker) => {
        grid[row][column] = marker;
    }

    const resetGrid = () => {
         grid = [
             ['','',''],
             ['','',''],
             ['','','']
         ];

         cleanBoard();
         drawBoard();       
    }

    const getWinCondition = () => {};

    const getDrawCondition = () => {};

    //drawing the board variables and methods above
    const table = document.querySelector('.board');

    const drawBoard = () =>  {
        for (let i = 0; i < 3; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                const cellToPlay = document.createElement('td');
                cellToPlay.classList.add('cell', `[${i}][${j}]`);
                cellToPlay.innerText = getGrid()[i][j];
                cellToPlay.addEventListener('click', playTest);
                row.appendChild(cellToPlay);
            }
            table.appendChild(row);
        }
    }

    const cleanBoard = () => {
        table.innerHTML = null;
    }

    //public variables
    return { getGrid, setPlay, resetGrid, getWinCondition, getDrawCondition, drawBoard };
})();

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

const ViewController = (function() {
    
})

//gameLogic
//scores
//AI moves

GameBoard.drawBoard();