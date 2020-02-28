export const checkLine = (x1, y1, x2, y2) => {
    if(x1 !== x2 && y1 !== y2){
        return {type:'Error',text:'Incorrect parameters'}
    }
    return false;
};
export const checkBucketFill = (parameters) =>
{
    let [x1, y1, c] = parameters;
    return (checkParameters([x1, y1]|| c.length > 1));

};
export const checkParameters = (parameters) => {
    for (let p of parameters) {
        if(isNaN(+p) || +p < 0) {
            return {type:'Error',text:"Incorrect parameters"};
        }
    }
    return false;
};

export const checkParametersLength=(parameters,length)=>{
    if(parameters.length!==length){
        return {type:'Error',text:'Incorrect number of parameters'};
    }
    return false;
};

export const checkCanvasBorders=(x1,y1,x2=0,y2=0,canvasParameters)=>{
    const [H,W]=canvasParameters;
    if(+x1>+H||+y1>+W||+x2>+H||+y2>+W){
        return {type:'Error',text:'Parameters exceed value of canvas borders'};
    }
    return false;
};