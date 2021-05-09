export const processOpEqual = (listOfOperators:string[],current_OperaTOR:number,array_Of_OperaNDs:string[],current_OperaND:number,curResult:number)=>{
    let result = curResult
    switch(listOfOperators[current_OperaTOR-1]){
        case 'plus':
            result += Number(array_Of_OperaNDs[current_OperaND])
            break;
        case 'minus':
            result -= Number(array_Of_OperaNDs[current_OperaND])
            break;
        case 'mul':
            result *= Number(array_Of_OperaNDs[current_OperaND])
            break;
        case 'div':
            result /= Number(array_Of_OperaNDs[current_OperaND])
            break;
    }
    return result
}