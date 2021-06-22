
// My types
type arrStr=Array<string>
type arr2dStr= Array<arrStr>;
// main function
function main(inputStr: string):string {
    const binaryArr = formatInput(inputStr)
    const readyToComp = preCompressing(binaryArr)
    const finalBinaryStr = compressor(readyToComp)
    return formatOutput(finalBinaryStr)
};

// steps
function formatInput(str: string):arr2dStr {
    let binaryArr = str.split('').map(char => char.charCodeAt(0).toString(2)).join('').split("")
    
    const toOneHundred: number = 100 - binaryArr.length % 100 
    const zerosToAdd: arrStr = Array(toOneHundred).fill('0')
    binaryArr = [...zerosToAdd, ...binaryArr]

    const toReturn:arr2dStr = []

    while(binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100))
    }

    return toReturn
}

function preCompressing(Arr: arr2dStr): arr2dStr {
    const newArr: arr2dStr = []
    Arr.forEach(arr => {
        newArr.push(arr, mix25(arr), reverceArr(arr), mirrorRight(arr), mirrorLeft(arr), symmetricRight(arr), symmetricLeft(arr))
    })
    return newArr
}

function compressor(Arr: arr2dStr): string {
    let acumRes = [...Arr[0]]
    Arr.splice(0, 1)
    Arr.forEach((arr, i)=> {
        const numToUse = Number.parseInt(arr.slice(((i%50)*2), ((i%50)*2)+2).join(''), 2)
        let opToUse: Function;
        switch(numToUse) {
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
                opToUse = myOr
        }
        acumRes = [...compressorHelper(opToUse, acumRes, arr)]
    })
    return acumRes.join("")
}

function formatOutput(str: string):string {
    return Number.parseInt(str, 2).toString(16).toUpperCase()
}

// helper functions
function reverceArr(arr: arrStr): arrStr {
    return [...arr].reverse()
}

function mix25(arr: arrStr): arrStr {
    const firstChunk = arr.slice(0, 25)
    const secondChunk = arr.slice(25, 50)
    const thirdChunk = arr.slice(50, 75)
    const fourthChunk = arr.slice(75)

    return [ ...secondChunk, ...firstChunk, ...fourthChunk, ...thirdChunk]
}

function mirrorRight(arr: arrStr): arrStr {
    const firstHalf = arr.slice(0, 50)
    return [...firstHalf, ...firstHalf.reverse()]
}

function mirrorLeft(arr: arrStr): arrStr {
    const secondHalf = arr.slice(50)
    return [...secondHalf.reverse(), ...secondHalf]
}

function symmetricRight(arr: arrStr): arrStr {
    const firstHalf = arr.slice(0, 50)
    return [ ...firstHalf.reverse(), ...firstHalf]
}

function symmetricLeft(arr: arrStr): arrStr {
    const secondHalf = arr.slice(50)
    return [...secondHalf, ...secondHalf.reverse()]
}

function compressorHelper(opToUse: Function, acumRes: arrStr, currentArr: arrStr): arrStr {
    const toReturn: arrStr = []
    for (let i = 0; i < 100; i++) {
        toReturn.push(opToUse(acumRes[i], currentArr[i]))
    }
    return toReturn
}

// Operations
function myAdd(bit1 : string, bit2: string): string {
    return Boolean(Number(bit1) && Number(bit2)) ? '1' : '0'
}

function myOr(bit1: string, bit2: string): string {
    return Boolean(Number(bit1) || Number(bit2)) ? '1' : '0'
}

function myXOr(bit1: string, bit2: string): string {
    return bit1 === bit2 ? '1' : '0'
}

function myXNOr(bit1: string, bit2: string): string {
    return bit1 !== bit2 ? '1' : '0'
}

export default main