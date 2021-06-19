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
    return [binaryStr];
}
exports.default = main;
