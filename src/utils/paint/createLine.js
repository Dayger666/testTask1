export const createLine = (x1, y1, x2, y2, lastResult) => {
    let newDrawingResult = [...lastResult];
    let temp ;
    let pos = x1 === x2;
    if (pos) {
        temp = y2 - y1;
    } else {
        temp = x2 - x1;
    }
    for (let i = 0; i <= temp; i++) {
        if (pos) {
            newDrawingResult[+y1 + i] = newDrawingResult[+y1 + i].split('');
            newDrawingResult[+y1 + i][+x1] = 'x';
            newDrawingResult[+y1 + i] = newDrawingResult[+y1 + i].join('');
        } else {
            newDrawingResult[+y1] = newDrawingResult[+y1].split('');
            newDrawingResult[+y1][+x1 + i] = 'x';
            newDrawingResult[+y1] = newDrawingResult[+y1].join('');
        }
    }
    return newDrawingResult;
};