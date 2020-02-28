import React, {useState} from "react";
import classes from './InputFile.module.css';
import {commandsCheck} from "../../utils/paint/drawingTool";


const InputFile = (props) => {

    let [file, fileChange] = useState(null);
    let [fileName, fileNameChange] = useState(null);

    let onClickDraw = () => {
        if (file != null) {
            props.resultRender(commandsCheck(file));
        }

    };
    const fileSelected = (e) => {
        if (e.target.files.length) {
            let fileData = new FileReader();
            fileData.readAsText(e.target.files[0]);
            fileNameChange(e.target.files[0].name);
            fileData.onload = (event) =>{
                fileChange(event.target.result);
            };
        }
    };
    return (
        <div>
            <div>
                <label className={classes.uploadBtn} htmlFor="inputFile">Upload file with commands</label>
                <div>
                    <input style={{display: 'none'}} id="inputFile" type='file' accept='text/plain'
                           onChange={fileSelected}/>
                </div>
                <div className={classes.fileName}>
                    {fileName ? fileName : 'File is not selected'}
                </div>
            </div>
            <div className={classes.buttons}>
                <button className={classes.drawBtn} type='button' onClick={onClickDraw}>Draw</button>
            </div>
        </div>
    )
};

export default InputFile;
