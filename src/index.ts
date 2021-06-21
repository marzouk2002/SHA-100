
// My types
type arrStr=Array<string>
type arr2dStr= Array<arrStr>;
// main function
function main(inputStr: string):string {
    const binaryArr = formatInput(inputStr)
    preCompressing(binaryArr)

    return formatOutput(binaryArr[0].join(""))
};

// helper functions
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
        newArr.push(arr)
        newArr.push(mix25(arr))
        newArr.push(reverceArr(arr))
    })
    return newArr
}

function formatOutput(str: string):string {
    return Number.parseInt(str, 2).toString(16).toUpperCase()
}

// Operations
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

export default main