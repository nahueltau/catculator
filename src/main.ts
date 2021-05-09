import { connectDOM, lcdOpColors } from "./connectDOM";
import { renderCats ,renderError } from "./lcd";
import { calculate, inputNumbers } from "./logic";
//SETUP
let a = 0;
let b = 0;
let current = "plus";
const viewResult = (slot: number) => {
  catresult.innerHTML = renderCats(slot, catresult);
  getCatResultWidth(String(slot).length)
};
const getResult = () => {
  a = calculate(a, b, current);
  b = 0;
  viewResult(a);
};
const catPressed = function (event: any) {
  let temp = inputNumbers(b, event.target.innerText);
  if(temp>999999999999999){
      catresult.innerHTML = renderError();
      return;
    }
  b = temp;
  viewResult(b);
};
const opPressed = function (event: any) {
  getResult();
  current = event.target.id;
  lcdOpColors(event.target.id);
};
const bigCPressed = () => {
  a = 0;
  b = 0;
  current = "plus";
  viewResult(a);
};
const cePressed = () => {
  b = 0;
  if (current !== "equal") {
    viewResult(a);
  }
};

const delPressed = () => {
  if (b > 9) {
    let c = String(b);
    b = Number(c.slice(0, c.length - 1));
  } else {
    b = 0;
  }
  if (current !== "equal") {
    viewResult(b);
  }
};
const invPressed = () => {
  b = b * -1;
  viewResult(b);
};
const dotPressed = () => {
  //code
};
const [catResultContainer, catresult] = connectDOM(
  catPressed,
  opPressed,
  bigCPressed,
  cePressed,
  delPressed,
  invPressed,
  dotPressed
);

let getCatResultWidth = (number: number) => {
  catresult.style.width = 10 + 10 * number + "rem";
  if (number < 7) {
    catresult.style.width = 70 + "rem";
  }
  catResultContainer?.scrollTo(100000000, 0);
};

viewResult(a);
