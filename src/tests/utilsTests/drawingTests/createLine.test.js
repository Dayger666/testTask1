import {createLine} from "../../../utils/paint/createLine";

describe('Create line in parameters', () => {
    test('If parameters are correct, line should be created ', () => {
        const testCanvas=[
            '-----------------',
            '|               |',
            '|               |',
            '-----------------',
        ];
        const testLine=[
            '-----------------',
            '|xxxxxxxxxxxxxx |',
            '|               |',
            '-----------------',
        ];
        expect(createLine(1,1,14,1,testCanvas),).toEqual(testLine);
    });
});