//gameBoard Module
var GameBoard = (function() {
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
        grid = grid.forEach(position => '-');
    }
    //public variables
    return { getGrid, setPlay, resetGrid };
})();

//atm this works like GameBoard.getGrid()[1] for mid row and so on...


//obj for players (factory)
//controller  - factory

//drawBoard func
//gameLogic
//scores

//AI moves