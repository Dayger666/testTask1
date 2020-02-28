import {checkLine, checkParameters} from "../../../utils/validators/validators";

describe('Lines can be either horizontal or vertical or will be error', () => {
    test('If line is not horizontal or vertical returns error', () => {
        const myErrorObj = {type: 'Error', text: 'Lines can be either horizontal or vertical'};
        expect(checkLine(1, 2, 3, 4)).toEqual(myErrorObj);
    });
    test('If line is set correctly,returns false', () => {
        expect(checkLine(1, 2, 3, 4)).toBe(false);
    });
});

describe('Check parameters on number and positivity', () => {
    test('Check parameters on number and positivity', () => {
        const myErrorObj = {type: 'Error', text: "Incorrect parameters"};
        expect(checkParameters([1, 'S', 3])).toEqual(myErrorObj);
    });
});
