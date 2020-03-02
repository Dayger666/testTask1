export const createBucketFill = (x, y, color, lastResult) => {
    let newDrawingResult = [...lastResult];

    if (newDrawingResult[y][x] === color) {
        return lastResult;
    }
    for (let i = 0; i < newDrawingResult.length; i++) {
        newDrawingResult[i] = newDrawingResult[i].split('');
    }

    let resultOfFill = fillBucket(x, y, newDrawingResult[y][x], color, newDrawingResult);
    for (let i = 0; i < resultOfFill.length; i++) {
        resultOfFill[i] = resultOfFill[i].join('');
    }
    return resultOfFill;
};
const fillBucket = (x, y, currentPos, color, newDrawingResult) => {
    if (currentPos !== newDrawingResult[y][x]) {
        return newDrawingResult;
    }
    newDrawingResult[y][x] = color;
    fillBucket(x, +y + 1, currentPos, color, newDrawingResult);
    fillBucket(+x + 1, y, currentPos, color, newDrawingResult);
    fillBucket(x, y - 1, currentPos, color, newDrawingResult);
    fillBucket(x - 1, y, currentPos, color, newDrawingResult);
    return newDrawingResult;
};
