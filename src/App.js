import React, {useCallback, useState} from 'react';
import './App.css';
import InputFile from "./components/Input/InputFile";
import OutputResult from "./components/Output/OutputResult";
import FileSaver from 'file-saver';

const App = () => {
    let [finalResult, setFinalResult] = useState(null);

    const resultRender = useCallback((result) => {
        setFinalResult(result);
    }, [setFinalResult]);

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
