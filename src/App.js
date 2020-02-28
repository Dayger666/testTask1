import React, {useState} from 'react';
import './App.css';
import InputFile from "./components/Input/InputFile";
import OutputResult from "./components/Output/OutputResult";
import FileSaver from 'file-saver';

const App = () => {
    let [finalResult, setFinalResult] = useState(null);

    const resultRender = (result) => {
        let resultsElements = '';
        for (let i = 0; i < result.length; i++) {
            if (result[i].type === 'Result') {
                for (let k = 0; k < result[i].text.length; k++) {
                    resultsElements += result[i].text[k] + '\n';
                }
            } else {
                resultsElements += result[i].text;
            }
            resultsElements += '\n';
        }
        setFinalResult(resultsElements);
    };
    const saveFile = () => {
        const blob = new Blob([finalResult], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'output.txt');
    };

    return (
        <div className='app-wrapper'>
            <InputFile resultRender={resultRender}/>
            <OutputResult resultOnOutput={finalResult} saveFile={saveFile}/>
        </div>

    )
};

export default App;
