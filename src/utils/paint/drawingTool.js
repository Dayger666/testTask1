import {createCanvas} from "../paint/createCanvas";
import {createLine} from "../paint/createLine";
import {createRectangle} from "../paint/createRectangle";
import {createBucketFill} from "../paint/createBucketFill";

import {convertToString} from "./supportTool/convertToString";
import {
    checkBucketFill,
    checkCanvasBorders,
    checkLine,
    checkParameters,
    checkParametersLength
} from "../validators/validators";

const CANVAS = 'C';
const LINE = 'L';
const RECTANGLE = 'R';
const BUCKET_FILL = 'B';

export const commandsCheck = (commands) => {
    let newStr = commands.split('\n');
    if (newStr[0][0] !== CANVAS) {
        return [{type:'Error',text:'First command must be canvas'}];
    }
    const [,...canvasParameters]=newStr[0].split(' ');
    let arr = [];
    let lastResult='';
    for (let command of newStr) {

        arr.push(commandsCreator(command.split(' '), lastResult,canvasParameters));
        if(arr[arr.length - 1].type === "Result"){
            lastResult=arr[arr.length-1].text;
        }
        if (arr[0] === false) {
            return {type:'Error',text:'Incorrect parameters in canvas'};
        }
    }
    return convertToString(arr);
};
const commandsCreator = (command, lastResult,canvasParameters) => {

    let [commandType, ...parameters] = command;
    let [x1, y1, x2, y2] = parameters;
    let error;
    switch (commandType) {
        case CANVAS:
            if (parameters.length !== 2 || checkParameters(parameters)) {
                return {type:'Error',text:'Incorrect parameters in canvas'};
            }
            return {type:'Result',text:createCanvas(x1, y1)};
        case LINE:
            error=checkParametersLength(parameters,4) || checkParameters(parameters) || checkLine(x1, y1, x2, y2)||checkCanvasBorders(x1,y1,x2,y2,canvasParameters);
            if(error!==false){
                return error;
            }
            return {type:'Result',text:createLine(x1, y1, x2, y2, lastResult)};
        case RECTANGLE:
            error=checkParametersLength(parameters,4)||checkParameters(parameters)||checkCanvasBorders(x1,y1,x2,y2,canvasParameters);
            if (error!==false) {
                return error
            }
            return {type:'Result',text:createRectangle(x1, y1, x2, y2, lastResult)};
        case BUCKET_FILL:
            error=checkParametersLength(parameters,3)||checkBucketFill(parameters)||checkCanvasBorders(x1,y1,x2,y2,canvasParameters);
            if (error!==false) {
                return error
            }
            return {type:'Result',text:createBucketFill(x1, y1, x2, lastResult)};
        default:
            return {type:'Error',text:"Incorrect command type"}
    }
};
