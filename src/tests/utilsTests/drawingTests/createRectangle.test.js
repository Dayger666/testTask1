import {createRectangle} from "../../../utils/paint/createRectangle";

describe('Create rectangle in parameters', () => {
    test('If parameters are correct, rectangle should be created ', () => {
        const testCanvas = [
            '-----------------',
            '|               |',
            '|               |',
            '-----------------',
        ];
        const testRectangle = [
            '-----------------',
            '|xxxxxxxxxx     |',
            '|xxxxxxxxxx     |',
            '-----------------',
        ];
        expect(createRectangle(1, 1, 10, 2, testCanvas),).toEqual(testRectangle);
    });
});