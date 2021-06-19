function main(inputStr: string):Array<string> {
    return format(inputStr)
};

// helper functions
function format(str: string):Array<string> {
    let binaryStr = str.split('').map(char => char.charCodeAt(0).toString(2)).join('')
    
    const toOneHundred: number = 100 - binaryStr.length % 100 
    const zerosToAdd: string = Array(toOneHundred).fill(0).join('')
    binaryStr = zerosToAdd + binaryStr

    const binaryArr: Array<string> = binaryStr.split('');
    const toReturn:Array<string> = []

    while(binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100).join(''))
    }
    console.log(toReturn)

    return toReturn
}

export default main