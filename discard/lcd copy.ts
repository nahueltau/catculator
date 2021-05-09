export const catresultConstructor = (c: string, catresult: HTMLElement) => {
  const parse = (image: string) => {
    return `<div class="${image} result">${c}</div>` + catresult.innerHTML;
  };
  let result: string = "";
  switch (c) {
    case "0":
      result = parse("J");
      break;
    case "1":
      result = parse("G");
      break;
    case "2":
      result = parse("H");
      break;
    case "3":
      result = parse("I");
      break;
    case "4":
      result = parse("D");
      break;
    case "5":
      result = parse("E");
      break;
    case "6":
      result = parse("F");
      break;
    case "7":
      result = parse("A");
      break;
    case "8":
      result = parse("B");
      break;
    case "9":
      result = parse("C");
      break;
    case ".":
      result = parse("dot");
      break;
    case "-":
      result = parse("inv");
      break;
  }
  return result;
};
export const renderCats = (c:number, catresult: HTMLElement)=>{
    catresult.innerHTML = "";
    const parse = (image: string,i:number,result:string) => {
        return `<div class="${image} result">${t[i]}</div>` + result;
      };
      let t = String(c)
      let result: string = "";
      for(let i=0;i<t.length;i++){
        switch (t[i]) {
                case "0":
                    result = parse("J",i,result);
                    break;
                case "1":
                    result = parse("G",i,result);
                    break;
                case "2":
                    result = parse("H",i,result);
                    break;
                case "3":
                    result = parse("I",i,result);
                    break;
                case "4":
                    result = parse("D",i,result);
                    break;
                case "5":
                    result = parse("E",i,result);
                    break;
                case "6":
                    result = parse("F",i,result);
                    break;
                case "7":
                    result = parse("A",i,result);
                    break;
                case "8":
                    result = parse("B",i,result);
                    break;
                case "9":
                    result = parse("C",i,result);
                    break;
                case "-":
                    result = parse("inv",i,result);
                break;   
            }
      }
      
      return result;
}