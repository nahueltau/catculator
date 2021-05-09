export const catresultConstructor = (c:string, catresult:HTMLElement)=>{
    const parse = (image:string)=>{
        return `<div class="${image} result">${c}</div>`+catresult.innerHTML;
    }
    let result:string = "";
    switch(c){
        case '0':
            result = parse("J")
            break;
        case '1':
            result =parse("G")
            break;
        case '2':
            result = parse("H")
            break;
        case '3':
            result =parse("I")
            break;
        case '4':
            result =parse("D")
            break;
        case '5':
            result =parse("E")
            break;
        case '6':
            result =parse("F")
            break;
        case '7':
            result =parse("A")
            break;
        case '8':
            result =parse("B")
            break;
        case '9':
            result =parse("C")
            break;
        case '.':
            result =parse("dot")
            break;
        case '-':
            result = parse("inv")
            break;
    }
    return result
}