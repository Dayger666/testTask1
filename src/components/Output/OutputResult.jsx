import React from "react";
import classes from './Output.module.css';


const OutputResult = (props) => {
    return (
        <div className={classes.resultField}>
            <div>
                <textarea wrap='off' disabled='disabled' className={classes.result}
                          value={props.resultOnOutput ? props.resultOnOutput : 'upload file'}/>
            </div>
            <div>
                <button disabled={!props.resultOnOutput} className={classes.saveBtn} type='button'
                        onClick={props.saveFile}>Download txt file
                </button>
            </div>
        </div>

    )

};
export default OutputResult;