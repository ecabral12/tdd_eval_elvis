function testNQueen(n) {
    if (n < 0) {
        throw new Error("Le nombre de reines ne peut pas être négatif");
    }
    const output = [];
    const plateau = Array(n).fill().map(() => Array(n).fill('O'));

    function isSafe(row, col) {
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
                plateau[row][col] = '#';
                placeQueen(row + 1);
                plateau[row][col] = 'O';
            }
        }
    }

    placeQueen(0);
    console.log("output", output);
    return output;
}

module.exports = { testNQueen };