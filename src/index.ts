function main(inputStr: string):Array<string> {
    return format(inputStr)
};

// helper functions
function format(str: string):Array<string> {
    let binaryArr = str.split('').map(char => char.charCodeAt(0).toString(2)).join('').split("")
    
    const toOneHundred: number = 100 - binaryArr.length % 100 
    const zerosToAdd: Array<string> = Array(toOneHundred).fill('0')
    binaryArr = [...zerosToAdd, ...binaryArr]

    const toReturn:Array<string> = []

    while(binaryArr.length) {
        toReturn.push(binaryArr.splice(0, 100).join(' '))
    }

    return toReturn
}

export default main