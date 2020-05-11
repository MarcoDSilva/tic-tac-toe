//Players Factory
const Player = (name, mark) => {
    let victories = 0;

    const addVictories = () => {
        victories += 1;
    }

    const getVictories = () => {
        return victories;
    }

    const getMark = () => {
        return mark;
    }

    return { name, getMark, addVictories, getVictories };
}

//gameBoard Module
const GameBoard = (function () {
    let grid = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const getGrid = () => {
        return grid;
    };

    const validatePlay = (row, column, marker) => {
        if(grid[row][column] === '') {
            return false;
        } else {
         setPlay(row,column,marker);
         return true;
        }
    }

    const setPlay = (row, column, marker) => {
        grid[row][column] = marker;
        ViewController.drawBoard();
    }

    const resetGrid = () => {
        grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        cleanBoard();
        ViewController.drawBoard();
    }

    const getWinCondition = () => { };

    const cleanBoard = () => {
        table.innerHTML = null;
    }
    //public variables
    return { getGrid, validatePlay, resetGrid, getWinCondition};
})();

const ViewController = (function () {
    //scores
    //player names
    //drawing the board variables and methods above
    const table = document.querySelector('.board');

    const drawBoard = () => {
        for (let i = 0; i < 3; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < 3; j++) {
                const cellToPlay = document.createElement('td');
                cellToPlay.classList.add('cell');
                cellToPlay.id = `${i}-${j}`;
                cellToPlay.innerText = GameBoard.getGrid()[i][j];
                cellToPlay.addEventListener('click', GameController.playerMove);
                row.appendChild(cellToPlay);
            }
            table.appendChild(row);
        }
    }

    return {drawBoard}

})();


// game controller - Module
const GameController = ((name1,name2) => {
    let activeGame = false;
    let p1 = Player(name1, 'X');
    let p2 = Player(name2, 'O');
    let playerTurn;
    let playerWaiting;
    let turnCheck;
    //turns
    //gamelogic
    const startGame = () => {
        GameBoard.resetGrid();
        changePlayerTurn();
    }

    const getPlayerTurn = () => {
        return playerTurn;
    }

    const changePlayerTurn = () => {        
        let turnCheck = Math.round(Math.random() * 100);

        if(turnCheck % 2 === 0) {
            playerTurn = p1;
            playerWaiting = p2;
        } else {
            playerTurn = p2;
            playerWaiting = p1;
        }
        turnCheck++;
    }

    const playerMove = (e) => {
       let rowClm = e.target.id.split('-');
        if(GameBoard.validatePlay(rowClm[0], rowClm[1], playerTurn.getMark()) === true) {
            changePlayerTurn();
            console.log("play done")
        } else {
            console.log('invalid play')
        }
    }

    return { startGame , playerMove};
})();


//to be removed
// let i = 0;
// function playTest() {

//     if (i % 2 == 0) {
//         this.innerHTML = 'X'
//     } else {
//         this.innerHTML = 'O'
//     }
//     i++;
// }

ViewController.drawBoard();