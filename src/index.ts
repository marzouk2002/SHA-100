function main(inputStr: string):any {
    return format(inputStr)
};

// helper functions
function format(str: string):Array<string> {
    let binaryStr = str.split('').map(char => char.charCodeAt(0).toString(2)).join('')
    
    const toOneHundred: number = 100 - binaryStr.length % 100 

    return [binaryStr]
}

export default main