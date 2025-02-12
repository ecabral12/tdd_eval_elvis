// fichier de testes 
const { testNQueen } = require('../queens.js');

describe('Test n -queens ', () => {
    test('solves N = 1', () => {
        expect(testNQueen(1)).toEqual([["#"]]);
    });
});

describe('Test n -queens ', () => {
    test('solves N = 2 ', () => {
        expect(testNQueen(2)).toEqual([]);
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

test('solves N = 8', () => {
    expect(testNQueen(8).length).toBe(92);
});

test('should throw an error when n is negative', () => {
    expect(() => {
      testNQueen(-1);
    }).toThrow('Le nombre de reines ne peut pas être négatif');
  });