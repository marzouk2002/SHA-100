"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
// main function
function main(inputStr) {
    var binaryArr = formatInput(inputStr);
    return formatOutput(binaryArr[0].join(""));
}
;
// helper functions
function formatInput(str) {
    var binaryArr = str.split('').map(function (char) { return char.charCodeAt(0).toString(2); }).join('').split("");
    var toOneHundred = 100 - binaryArr.length % 100;
    var zerosToAdd = Array(toOneHundred).fill('0');
    binaryArr = __spreadArray(__spreadArray([], zerosToAdd), binaryArr);
    var toReturn = [];
    while (binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100));
    }
    return toReturn;
}
function preHashing(arr) {
    var newArr = [];
    arr.forEach(function (str) {
    });
    return newArr;
}
function formatOutput(str) {
    return Number.parseInt(str, 2).toString(16).toUpperCase();
}
// Operations
function reverceArr(arr) {
    return arr.reverse();
}
function mix25(arr) {
    var firstChunk = arr.splice(0, 25);
    var secondChunk = arr.splice(0, 25);
    var thirdChunk = arr.splice(0, 25);
    var fourthChunk = arr.splice(0, 25);
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray([], fourthChunk), thirdChunk), secondChunk), firstChunk);
}
exports.default = main;
