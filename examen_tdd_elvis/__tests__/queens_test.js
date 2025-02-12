// fichier de testes 
const { testNQueen } = require('../queens.js');

describe('Test n -queens ', () => {
    test('solves N = 1', () => {
        expect(testNQueen(1)).toEqual([["#"]]);
    });
});
