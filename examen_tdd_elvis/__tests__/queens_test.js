// fichier de testes 
const { testNQueen } = require('../queens.js');

describe('Test n -queens ', () => {
    test('solves N = 1', () => {
        expect(testNQueen(1)).toEqual([["#"]]);
    });
});


test('solves N = 4', () => {
    expect(testNQueen(4)).toEqual([
        [
            "O#OO",
            "OOO#",
            "#OOO",
            "OO#O"
        ],
        [
            "OO#O",
            "#OOO",
            "OOO#",
            "O#OO"
        ]
    ]);
});

test('solves N = 6', () => {
    expect(testNQueen(6).length).toBe(4);
});