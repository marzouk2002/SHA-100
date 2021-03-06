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
    var readyToComp = preCompressing(binaryArr);
    var finalBinaryStr = compressor(readyToComp).join('');
    return formatOutput(finalBinaryStr);
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
        newArr.push(arr, mix25(arr), reverceArr(arr), mirrorRight(arr), mirrorLeft(arr), symmetricRight(arr), symmetricLeft(arr));
    });
    return newArr;
}
function compressor(Arr) {
    var arr = __spreadArray([], Arr);
    if (arr.length === 1) {
        return arr[0];
    }
    else {
        var firstHalf = arr.slice(0, Math.floor(arr.length / 2));
        var secondHalf = arr.slice(Math.floor(arr.length / 2));
        return compressorHelper(compressor(firstHalf), compressor(secondHalf));
    }
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
function mirrorRight(arr) {
    var firstHalf = arr.slice(0, 50);
    return __spreadArray(__spreadArray([], firstHalf), firstHalf.reverse());
}
function mirrorLeft(arr) {
    var secondHalf = arr.slice(50);
    return __spreadArray(__spreadArray([], secondHalf.reverse()), secondHalf);
}
function symmetricRight(arr) {
    var firstHalf = arr.slice(0, 50);
    return __spreadArray(__spreadArray([], firstHalf.reverse()), firstHalf);
}
function symmetricLeft(arr) {
    var secondHalf = arr.slice(50);
    return __spreadArray(__spreadArray([], secondHalf), secondHalf.reverse());
}
function compressorHelper(Arr1, Arr2) {
    var toReturn = [];
    var numToUse = Number.parseInt(Arr1[0] + Arr2[0], 2);
    var opToUse;
    switch (numToUse) {
        case 1:
            opToUse = myXOr;
            break;
        case 3:
            opToUse = myAdd;
            break;
        case 2:
            opToUse = myXNOr;
            break;
        default:
            opToUse = myOr;
    }
    for (var i = 0; i < 100; i++) {
        toReturn.push(opToUse(Arr1[i], Arr2[i]));
    }
    return toReturn;
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
