export const calculate = (a:number,b:number,o:string)=>{
    let res:number = 0;
    switch (o){
        case 'plus':
            res = a + b;
            break;
        case 'minus':
            res = a - b;
            break;
        case 'mul':
            res = a * b;
            break;
        case 'div':
            res = a / b;
            break;
        case 'equal':
            res = a;
            break;
    }
    return res;
}
export const inputNumbers = (b:number,i:string)=>{
    return Number(String(b)+i);
}