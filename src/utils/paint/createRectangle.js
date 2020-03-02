import {createLine} from "./createLine";


export const createRectangle = (x1, y1, x2, y2, lastResult) => {
    let newDrawingResult = [...lastResult];
    let x3 = x2;

    let tempY = y2 - y1;
    for (let i = y1; i <= tempY + 1; i++) {
        if (i === y1 || i === tempY + 1) {
            newDrawingResult[i] = createLine(x1, i, x3, i, newDrawingResult)[i];
        } else {
            newDrawingResult[i] = newDrawingResult[i].split('');
            newDrawingResult[i][x1] = 'x';
            newDrawingResult[i][x2] = 'x';
            newDrawingResult[i] = newDrawingResult[i].join('');
        }
    }
    return newDrawingResult;
};