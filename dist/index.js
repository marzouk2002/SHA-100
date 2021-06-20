"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
function main(inputStr) {
    return format(inputStr);
}
;
// helper functions
function format(str) {
    var binaryArr = str.split('').map(function (char) { return char.charCodeAt(0).toString(2); }).join('').split("");
    var toOneHundred = 100 - binaryArr.length % 100;
    var zerosToAdd = Array(toOneHundred).fill('0');
    binaryArr = __spreadArray(__spreadArray([], zerosToAdd), binaryArr);
    var toReturn = [];
    while (binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100).join(' '));
    }
    return toReturn;
}
exports.default = main;
