export const createCanvas = (width, height) => {
    let canvas = [];
    let str = '';
    for (let i = 0; i < +width + 2; i++) {
        str += "-"
    }
    canvas.push(str);
    str = '';
    for (let h = 0; h < +height; h++) {
        for (let w = 0; w < +width + 2; w++) {
            if (w === 0 || w === +width + 1) {
                str += '|';
            } else {
                str += " ";
            }
        }
        canvas.push(str);
        str = '';
    }
    str = '';
    for (let i = 0; i < +width + 2; i++) {
        str += "-"
    }
    canvas.push(str);
    return canvas;
};
