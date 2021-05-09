export const renderCats = (c:number, catresult: HTMLElement)=>{
    catresult.innerHTML = "";
    const parse = (image: string,i:number) => {
        return `<div class="${image} result">${t[i]}</div>` + result;
      };
      let t = String(c)
      let result: string = "";
      let float:[number,boolean] = [0,false];
      for(let i=0;i<t.length;i++){
        if(i-float[0]>3&&float[1]){break}
        switch (t[i]) {
                case "0":
                    result = parse("J",i);
                    break;
                case "1":
                    result = parse("G",i);
                    break;
                case "2":
                    result = parse("H",i);
                    break;
                case "3":
                    result = parse("I",i);
                    break;
                case "4":
                    result = parse("D",i);
                    break;
                case "5":
                    result = parse("E",i);
                    break;
                case "6":
                    result = parse("F",i);
                    break;
                case "7":
                    result = parse("A",i);
                    break;
                case "8":
                    result = parse("B",i);
                    break;
                case "9":
                    result = parse("C",i);
                    break;
                case "-":
                    result = parse("inv",i);
                break;   
                case ".":
                    result = parse("dot",i);
                    float =[i, true];
                break;   
            }
      }
      
      return result;
}
export const renderError = ()=>{
    let result: string = "<div class='dot'>Too many cats</div>";

    return result;
}