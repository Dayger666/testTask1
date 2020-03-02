export const convertToString = (result) => {
    let resultsElements = '';
    for (let i = 0; i < result.length; i++) {
        if (result[i].type === 'Result') {
            for (let k = 0; k < result[i].text.length; k++) {
                resultsElements += result[i].text[k] + '\n';
            }
        } else {
            resultsElements += result[i].text + '\n';
        }
        resultsElements += '\n';
    }
    return resultsElements;
};