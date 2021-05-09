import { connectDOM, lcdOpColors } from "../src/connectDOM";
import { catresultConstructor } from "../src/lcd";
import { processOpEqual } from "./logic";
//SETUP
let result: number = 0;
let resultString: string = "0";
let a = 0;
let b = 0;
let current = 'plus';
let E = 0;
let array_Of_OperaNDs: string[] = [""];
let current_OperaND: number = 0;
let listOfOperators: [string] = [""];
let current_OperaTOR: number = 0;
let wasLastInputAnOperator: boolean = true;
let wasLastInputANumber: boolean = false;

const calculate = (a:number,b:number,o:string)=>{
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
    }
    return res;
}
const inputNumbers = (b:number,i:string)=>{
    return Number(String(b)+i);
}
const processCatInput = (i: string) => {
  
  array_Of_OperaNDs[current_OperaND] += i;
  if (current_OperaTOR === 0) {
    result = Number(array_Of_OperaNDs[current_OperaND]);
  }
  wasLastInputAnOperator = false;
  wasLastInputANumber = true;
};
const catPressed = function (event: any) {
  if (array_Of_OperaNDs[current_OperaND] === undefined) {
    array_Of_OperaNDs[current_OperaND] = "";
  }
  if (array_Of_OperaNDs[current_OperaND] === "0") {
    array_Of_OperaNDs[current_OperaND] = "";
  }
  if (listOfOperators[current_OperaTOR] === "equal") {
    return;
  }
  /* a = calculate(a,Number(event.target.innerText),current) */
  b = inputNumbers(b,event.target.innerText) 
  console.log("cur:"+b)
  processCatInput(event.target.innerText);
  showResult();
};

const processOpInput = (i: string) => {
  listOfOperators[current_OperaTOR] = i;
  wasLastInputAnOperator = true;
  if (array_Of_OperaNDs.length === 1) {
    resultString = array_Of_OperaNDs[current_OperaND];
  }
  current_OperaND++;
  current_OperaTOR++;
  wasLastInputANumber = false;
};

const opPressed = function (event: any) {
  a = calculate(a,b,current);
  b=0;
  console.log("res:"+a)
  current = event.target.id;
  switch (event.target.id) {
    case "plus":
      if (wasLastInputAnOperator) {
        break;
      }
      processOpInput("plus");
      lcdOpColors(event.target.id);
      break;
    case "minus":
      if (wasLastInputAnOperator) {
        break;
      }
      processOpInput("minus");
      lcdOpColors(event.target.id);
      break;
    case "mul":
      if (wasLastInputAnOperator) {
        break;
      }
      processOpInput("mul");
      lcdOpColors(event.target.id);
      break;
    case "div":
      if (wasLastInputAnOperator) {
        break;
      }
      processOpInput("div");
      lcdOpColors(event.target.id);
      break;
    case "equal":
      result = processOpEqual(
        listOfOperators,
        current_OperaTOR,
        array_Of_OperaNDs,
        current_OperaND,
        result
      );
      resultString = String(result);
      wasLastInputANumber = false;
      listOfOperators[current_OperaTOR] = "equal";
      lcdOpColors(event.target.id);
      break;
    case "ce":
      array_Of_OperaNDs[current_OperaND] = "0";
      lcdOpColors();
      break;
    case "cc":
      result = 0;
      resultString = "0";
      array_Of_OperaNDs = [""];
      current_OperaND = 0;
      listOfOperators = [""];
      current_OperaTOR = 0;
      wasLastInputAnOperator = true;
      wasLastInputANumber = false;
      lcdOpColors();
      break;
    case "del":
      array_Of_OperaNDs[current_OperaND] = array_Of_OperaNDs[
        current_OperaND
      ].slice(0, current_OperaND - 1);
      if (array_Of_OperaNDs[current_OperaND].length === 0) {
        array_Of_OperaNDs[current_OperaND] = "0";
      }
      break;
    case "inv":
      if (
        wasLastInputAnOperator &&
        listOfOperators[current_OperaTOR] !== "equal"
      ) {
        break;
      }
      if (!wasLastInputANumber) {
        result *= -1;
        resultString = String(result);
      } else {
        array_Of_OperaNDs[current_OperaND] = String(
          Number(array_Of_OperaNDs[current_OperaND]) * -1
        );
      }
      break;
    case "dot":
      wasLastInputAnOperator = false;
      if (array_Of_OperaNDs[current_OperaND] === undefined) {
        array_Of_OperaNDs[current_OperaND] = "0.";
      } else {
        array_Of_OperaNDs[current_OperaND] += ".";
      }
      if (listOfOperators[current_OperaTOR] === "equal") {
        console.log("not yet implemented");
      }
      break;
  }

  showResult();
};
const [catResultDraggeable, catresult] = connectDOM(catPressed, opPressed);
//OPERATORS

let getCatResultWidth = (number: number) => {
  catresult.style.width = 10 + 10 * number + "rem";
  if (number < 7) {
    catresult.style.width = 70 + "rem";
  }
  catResultDraggeable?.scrollTo(100000000, 0);
};

//SCREEN

const loop = (range: string) => {
  let crop: boolean = false;
  let float: number = 0;
  for (let c of range.split("")) {
    if (crop === true) {
      float++;
    }
    if (c === ".") {
      crop = true;
    }
    catresult.innerHTML = catresultConstructor(c, catresult);
    if (float === 2) {
      break;
    }
  }
};
const showResult = function () {
  catresult.innerHTML = "";

  if (wasLastInputANumber) {
    loop(array_Of_OperaNDs[current_OperaND]);
    getCatResultWidth(array_Of_OperaNDs[current_OperaND].split("").length);
  }
  if (wasLastInputAnOperator || listOfOperators[current_OperaTOR] === "equal") {
    loop(resultString);
    let stringLength =
      resultString.indexOf(".") !== -1
        ? resultString.indexOf(".") + 2
        : resultString.split("").length; //escaping multiple float points
    getCatResultWidth(stringLength);
  }
};
showResult();
