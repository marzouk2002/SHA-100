
// My types
type arrStr=Array<string>
type arr2dStr= Array<arrStr>;
// main function
function main(inputStr: string):string {
    const binaryArr = formatInput(inputStr)
    console.log('original arr:', binaryArr)
    console.log('ready for hash:',preHashing(binaryArr))

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

function preHashing(Arr: arr2dStr): arr2dStr {
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
    return arr.reverse()
}

function mix25(arr: arrStr): arrStr {
    const firstChunk = arr.splice(0, 25)
    const secondChunk = arr.splice(0, 25)
    const thirdChunk = arr.splice(0, 25)
    const fourthChunk = arr.splice(0, 25)

    return [...fourthChunk, ...thirdChunk, ...secondChunk, ...firstChunk]
}

export default main