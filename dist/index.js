"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main(inputStr) {
    return format(inputStr);
}
;
// helper functions
function format(str) {
    var binaryStr = str.split('').map(function (char) { return char.charCodeAt(0).toString(2); }).join('');
    var toOneHundred = 100 - binaryStr.length % 100;
    var zerosToAdd = Array(toOneHundred).fill(0).join('');
    binaryStr = zerosToAdd + binaryStr;
    var binaryArr = binaryStr.split('');
    var toReturn = [];
    while (binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100).join(''));
    }
    console.log(toReturn);
    return toReturn;
}
exports.default = main;
