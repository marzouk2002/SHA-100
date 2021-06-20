// main function
function main(inputStr: string):string {
    const binaryArr = formatInput(inputStr)

    return formatOutput(binaryArr[0])
};

// helper functions
function formatInput(str: string):Array<string> {
    let binaryArr = str.split('').map(char => char.charCodeAt(0).toString(2)).join('').split("")
    
    const toOneHundred: number = 100 - binaryArr.length % 100 
    const zerosToAdd: Array<string> = Array(toOneHundred).fill('0')
    binaryArr = [...zerosToAdd, ...binaryArr]

    const toReturn:Array<string> = []

    while(binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100).join(''))
    }

    return toReturn
}

function formatOutput(str: string):string {
    return Number.parseInt(str, 2).toString(16).toUpperCase()
}


export default main