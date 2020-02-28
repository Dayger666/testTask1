
import {createCanvas} from "../../../utils/paint/createCanvas";
describe('Create canvas in parameters', () => {
    test('If parameters are correct, canvas should be created ', () => {
        const testCanvas=[
            '-----------------',
            '|               |',
            '|               |',
            '-----------------',
        ];
        expect(createCanvas(15,2)).toEqual(testCanvas);
    });
});