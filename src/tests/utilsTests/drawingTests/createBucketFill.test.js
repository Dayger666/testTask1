import {createBucketFill} from "../../../utils/paint/createBucketFill";

describe('Create bucketFill in parameters', () => {
    test('If parameters are correct, bucketFill should be created ', () => {
        const testCanvas = [
            '-----------------',
            '|xxxxxxxxxx     |',
            '|xxxxxxxxxx     |',
            '-----------------',
        ];
        const testBucketFill = [
            '-----------------',
            '|xxxxxxxxxxKKKKK|',
            '|xxxxxxxxxxKKKKK|',
            '-----------------',
        ];
        expect(createBucketFill(11, 1, 'K', testCanvas),).toEqual(testBucketFill);
    });
});