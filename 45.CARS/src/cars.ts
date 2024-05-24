import { features } from "process";

function storeCarInfo(manufacture: string, modelName: string,...extraOption: {[key:string]:any}[]){
  const carInfo = {
    manufacture,
    modelName,
    ...Object.assign({}, ...extraOption)
  }
  return carInfo;

};


let answer = storeCarInfo('honda','civic',{color:'black'},{features:['navigation','power window']})
console.log(answer);
  