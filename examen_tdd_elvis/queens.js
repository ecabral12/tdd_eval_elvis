// for first commit 

//exercise 1 

function testNQueen(n){
    const output = [];
    const plateau = Array(n).fill().map(() => Array(n).fill('0'));


    function isSafe(row, col) {
        console.log("elvisssss","function is safe is being called")
        for (let i = 0; i < row; i++) {
            if (plateau[i][col] == '#') return false;
            if (col - (row - i) >= 0 && plateau[i][col - (row - i)] == '#') return false;
            if (col + (row - i) < n && plateau[i][col + (row - i)] == '#') return false;
        }
        return true;
    }

    function placeQueen(row) {
        if (row == n) {
            output.push(plateau.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                console.log("Elvisssss",isSafe(row,col))
                plateau[row][col] = '#';
                placeQueen(row + 1);
                plateau[row][col] = '0';
            }
        }
    }
    placeQueen(0);
    return output.map(solution => solution.map(row => row.split('')));
}
module.exports = { testNQueen };