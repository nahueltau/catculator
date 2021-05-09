const hash: HTMLDivElement =
  document.querySelector("#view-numbers") || document.createElement("div");
const catResultDraggeable: HTMLElement =
  document.getElementById("catresultcontainer") ||
  document.createElement("div");
const catresult: HTMLDivElement =
  document.querySelector("#catresult") || document.createElement("div");
const buttons: any | null = document.querySelectorAll(".buttons");
const catbuttons: any | null = document.querySelectorAll(".cat");
const operators: any | null = document.querySelectorAll(".op");
const scrollHandlers: any | null = document.querySelectorAll(".scroll div");
interface lcdI {
  [key: string]: HTMLDivElement;
}
const lcd: lcdI = {
  lcdequal:
    document.querySelector("#lcdequal") || document.createElement("div"),
  lcdplus: document.querySelector("#lcdplus") || document.createElement("div"),
  lcddiv: document.querySelector("#lcddiv") || document.createElement("div"),
  lcdminus:
    document.querySelector("#lcdminus") || document.createElement("div"),
  lcdmul: document.querySelector("#lcdmul") || document.createElement("div"),
};
const inv: HTMLDivElement =
  document.querySelector("#inv") || document.createElement("div");
const ce: HTMLDivElement =
  document.querySelector("#ce") || document.createElement("div");
const cc: HTMLDivElement =
  document.querySelector("#cc") || document.createElement("div");
const dot: HTMLDivElement =
  document.querySelector("#dot") || document.createElement("div");
const del: HTMLDivElement =
  document.querySelector("#del") || document.createElement("div");

export const connectDOM = (
  catPressed: any,
  opPressed: any,
  bigCPressed: any,
  cePressed: any,
  delPressed: any,
  invPressed: any,
  dotPressed: any
) => {
  inv.addEventListener("click", invPressed);
  ce.addEventListener("click", cePressed);
  cc.addEventListener("click", bigCPressed);
  dot.addEventListener("click", dotPressed);
  del.addEventListener("click", delPressed);
  hash?.addEventListener("mouseover", () => {
    const results: any | null = document.querySelectorAll(".result");
    catbuttons.forEach((e: HTMLElement) => {
      e.classList.add("hash-button");
    });
    results.forEach((e: HTMLElement) => {
      e.classList.add("hash-result");
    });
    catResultDraggeable?.scrollTo(100000000, 0);
  });
  hash?.addEventListener("mouseout", () => {
    const results: any | null = document.querySelectorAll(".result");
    catbuttons.forEach((e: HTMLElement) => {
      e.classList.remove("hash-button");
    });
    results.forEach((e: HTMLElement) => {
      e.classList.remove("hash-result");
    });
  });

  for (let button of buttons) {
    button.addEventListener("mousedown", buttonDown);
    button.addEventListener("mouseup", buttonUp);
    button.addEventListener("mouseout", buttonUp);
  }
  for (let c of catbuttons) {
    c.addEventListener("click", catPressed);
  }

  for (let b of operators) {
    b.addEventListener("click", opPressed);
  }
  //DRAG LCD

  scrollHandlers[0].addEventListener("click", () => {
    catResultDraggeable?.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  });
  scrollHandlers[1].addEventListener("click", () => {
    catResultDraggeable?.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  });

  return [catResultDraggeable, catresult];
};
export const lcdOpColors = (selctor: any = null) => {
  const clearLcdOpColors = () => {
    let color = "white";
    if (
      lcd.lcdplus &&
      lcd.lcddiv &&
      lcd.lcdequal &&
      lcd.lcdminus &&
      lcd.lcdmul
    ) {
      lcd.lcdplus.style.color = color;
      lcd.lcddiv.style.color = color;
      lcd.lcdequal.style.color = color;
      lcd.lcdminus.style.color = color;
      lcd.lcdmul.style.color = color;
    }
  };

  clearLcdOpColors();
  if (selctor !== null && lcd["lcd" + selctor] !== null) {
    lcd["lcd" + selctor].style.color = "black";
  }
};
const buttonDown = (event: any) => {
  if (event.target.className.includes("buttons")) {
    event.target.classList.add("pressed");
  }
};
const buttonUp = (event: any) => {
  if (event.target.className.includes("buttons")) {
    event.target.classList.remove("pressed");
  }
};
