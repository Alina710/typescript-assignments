"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('honda', 'civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
