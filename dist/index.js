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
    var readyToHash = preCompressing(binaryArr);
    return formatOutput(readyToHash[2].join(""));
}
;
// steps
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
function preCompressing(Arr) {
    var newArr = [];
    Arr.forEach(function (arr) {
        newArr.push(arr);
        newArr.push(mix25(arr));
        newArr.push(reverceArr(arr));
    });
    return newArr;
}
function formatOutput(str) {
    return Number.parseInt(str, 2).toString(16).toUpperCase();
}
// helper functions
function reverceArr(arr) {
    return __spreadArray([], arr).reverse();
}
function mix25(arr) {
    var firstChunk = arr.slice(0, 25);
    var secondChunk = arr.slice(25, 50);
    var thirdChunk = arr.slice(50, 75);
    var fourthChunk = arr.slice(75);
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray([], secondChunk), firstChunk), fourthChunk), thirdChunk);
}
// Operations
function myAdd(bit1, bit2) {
    return Boolean(Number(bit1) && Number(bit2)) ? '1' : '0';
}
function myOr(bit1, bit2) {
    return Boolean(Number(bit1) || Number(bit2)) ? '1' : '0';
}
function myXOr(bit1, bit2) {
    return bit1 === bit2 ? '1' : '0';
}
function myXNOr(bit1, bit2) {
    return bit1 !== bit2 ? '1' : '0';
}
exports.default = main;
