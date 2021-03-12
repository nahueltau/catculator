//SETUP
var result = 0;
var resultString = '0';
var array_Of_OperaNDs = [""];
var current_OperaND = 0;
var listOfOperators = [""];
var current_OperaTOR = 0;
var wasLastInputAnOperator = true;
var wasLastInputANumber = false;
var catPressed = function (event) {
    if (array_Of_OperaNDs[current_OperaND] === undefined) {
        array_Of_OperaNDs[current_OperaND] = '';
    }
    if (array_Of_OperaNDs[current_OperaND] === '0') {
        array_Of_OperaNDs[current_OperaND] = '';
    }
    if (listOfOperators[current_OperaTOR] === 'equal') {
        return;
    }
    switch (event.target.id) {
        case 'J':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '0';
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            wasLastInputANumber = true;
            break;
        case 'G':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '1';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'H':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '2';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'I':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '3';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'D':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '4';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'E':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '5';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'F':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '6';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'A':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '7';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'B':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '8';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
        case 'C':
            wasLastInputAnOperator = false;
            array_Of_OperaNDs[current_OperaND] += '9';
            wasLastInputANumber = true;
            if (current_OperaTOR === 0) {
                result = Number(array_Of_OperaNDs[current_OperaND]);
            }
            break;
    }
    showResult();
};
//OPERATORS
var lcdequal = document.querySelector('#lcdequal');
var lcdplus = document.querySelector('#lcdplus');
var lcddiv = document.querySelector('#lcddiv');
var lcdminus = document.querySelector('#lcdminus');
var lcdmul = document.querySelector('#lcdmul');
var clearLcdOpColors = function () {
    var color = "white";
    if (lcdplus && lcddiv && lcdequal && lcdminus && lcdmul) {
        lcdplus.style.color = color;
        lcddiv.style.color = color;
        lcdequal.style.color = color;
        lcdminus.style.color = color;
        lcdmul.style.color = color;
    }
};
var opPressed = function (event) {
    switch (event.target.id) {
        case 'plus':
            if (wasLastInputAnOperator) {
                break;
            }
            listOfOperators[current_OperaTOR] = 'plus';
            wasLastInputAnOperator = true;
            if (array_Of_OperaNDs.length === 1) {
                resultString = array_Of_OperaNDs[current_OperaND];
            }
            current_OperaND++;
            current_OperaTOR++;
            wasLastInputANumber = false;
            clearLcdOpColors();
            if (lcdplus) {
                lcdplus.style.color = "black";
            }
            break;
        case 'minus':
            if (wasLastInputAnOperator) {
                break;
            }
            listOfOperators[current_OperaTOR] = 'minus';
            wasLastInputAnOperator = true;
            if (array_Of_OperaNDs.length === 1) {
                resultString = array_Of_OperaNDs[current_OperaND];
            }
            current_OperaND++;
            current_OperaTOR++;
            wasLastInputANumber = false;
            clearLcdOpColors();
            if (lcdminus) {
                lcdminus.style.color = "black";
            }
            break;
        case 'mul':
            if (wasLastInputAnOperator) {
                break;
            }
            listOfOperators[current_OperaTOR] = 'mul';
            wasLastInputAnOperator = true;
            if (array_Of_OperaNDs.length === 1) {
                resultString = array_Of_OperaNDs[current_OperaND];
            }
            current_OperaND++;
            current_OperaTOR++;
            wasLastInputANumber = false;
            clearLcdOpColors();
            if (lcdmul) {
                lcdmul.style.color = "black";
            }
            break;
        case 'div':
            if (wasLastInputAnOperator) {
                break;
            }
            listOfOperators[current_OperaTOR] = 'div';
            wasLastInputAnOperator = true;
            if (array_Of_OperaNDs.length === 1) {
                resultString = array_Of_OperaNDs[current_OperaND];
            }
            current_OperaND++;
            current_OperaTOR++;
            wasLastInputANumber = false;
            clearLcdOpColors();
            if (lcddiv) {
                lcddiv.style.color = "black";
            }
            break;
        case 'equal':
            switch (listOfOperators[current_OperaTOR - 1]) {
                case 'plus':
                    result += Number(array_Of_OperaNDs[current_OperaND]);
                    resultString = String(result);
                    break;
                case 'minus':
                    result -= Number(array_Of_OperaNDs[current_OperaND]);
                    resultString = String(result);
                    break;
                case 'mul':
                    result *= Number(array_Of_OperaNDs[current_OperaND]);
                    resultString = String(result);
                    break;
                case 'div':
                    result /= Number(array_Of_OperaNDs[current_OperaND]);
                    resultString = String(result);
                    break;
            }
            wasLastInputANumber = false;
            listOfOperators[current_OperaTOR] = 'equal';
            clearLcdOpColors();
            if (lcdequal) {
                lcdequal.style.color = "black";
            }
            break;
        case 'ce':
            array_Of_OperaNDs[current_OperaND] = '0';
            break;
        case 'cc':
            result = 0;
            resultString = '0';
            array_Of_OperaNDs = [""];
            current_OperaND = 0;
            listOfOperators = [""];
            current_OperaTOR = 0;
            wasLastInputAnOperator = true;
            wasLastInputANumber = false;
            break;
        case 'del':
            array_Of_OperaNDs[current_OperaND] = array_Of_OperaNDs[current_OperaND].slice(0, current_OperaND - 1);
            if (array_Of_OperaNDs[current_OperaND].length === 0) {
                array_Of_OperaNDs[current_OperaND] = '0';
            }
            break;
        case 'inv':
            if (wasLastInputAnOperator && listOfOperators[current_OperaTOR] !== 'equal') {
                break;
            }
            if (!wasLastInputANumber) {
                result *= -1;
                resultString = String(result);
                console.log('result: ', resultString);
            }
            else {
                array_Of_OperaNDs[current_OperaND] = String(Number(array_Of_OperaNDs[current_OperaND]) * -1);
            }
            break;
        case 'dot':
            wasLastInputAnOperator = false;
            if (array_Of_OperaNDs[current_OperaND] === undefined) {
                array_Of_OperaNDs[current_OperaND] = '0.';
            }
            else {
                array_Of_OperaNDs[current_OperaND] += '.';
            }
            if (listOfOperators[current_OperaTOR] === 'equal') {
                console.log('not yet implemented');
            }
            break;
    }
    showResult();
};
//button animation
var buttons = document.querySelectorAll(".buttons");
var buttonDown = function (event) {
    if (event.target.className.includes("buttons")) {
        event.target.classList.add("pressed");
    }
};
var buttonUp = function (event) {
    if (event.target.className.includes("buttons")) {
        event.target.classList.remove("pressed");
    }
};
for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
    var button = buttons_1[_i];
    button.addEventListener('mousedown', buttonDown);
    button.addEventListener('mouseup', buttonUp);
}
window.addEventListener("mouseup", function () {
    var pressed_buttons = document.querySelectorAll(".pressed");
    pressed_buttons.forEach(function (e) { e.classList.remove("pressed"); });
});
//adding events
var catbuttons = document.querySelectorAll('.cat');
for (var _a = 0, catbuttons_1 = catbuttons; _a < catbuttons_1.length; _a++) {
    var c = catbuttons_1[_a];
    c.addEventListener('click', catPressed);
}
;
var operatorBooleanuttons = document.querySelectorAll('.op');
for (var _b = 0, operatorBooleanuttons_1 = operatorBooleanuttons; _b < operatorBooleanuttons_1.length; _b++) {
    var b = operatorBooleanuttons_1[_b];
    b.addEventListener('click', opPressed);
}
;
//DRAG LCD
var catResultDraggeable = document.getElementById('catresultcontainer');
var scrollHandlers = document.querySelectorAll('.scroll div');
scrollHandlers[0].addEventListener("click", function () {
    catResultDraggeable === null || catResultDraggeable === void 0 ? void 0 : catResultDraggeable.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
    });
});
scrollHandlers[1].addEventListener("click", function () {
    catResultDraggeable === null || catResultDraggeable === void 0 ? void 0 : catResultDraggeable.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
});
var getCatResultWidth = function (number) {
    var catResultWidth = document.querySelector("#catresult");
    if (catResultWidth) {
        catResultWidth.style.width = 10 + 10 * number + "rem";
        if (number < 7) {
            catResultWidth.style.width = 70 + "rem";
        }
        catResultDraggeable === null || catResultDraggeable === void 0 ? void 0 : catResultDraggeable.scrollTo(100000000, 0);
    }
};
//VIEW NUMBERS
var hash = document.querySelector("#view-numbers");
if (hash) {
    hash.addEventListener("mouseover", function () {
        var buttons = document.querySelectorAll(".cat");
        var results = document.querySelectorAll(".result");
        buttons.forEach(function (e) { e.style.color = "white"; e.style.backgroundSize = "0%"; });
        results.forEach(function (e) { e.style.color = "white"; e.style.backgroundSize = "0%"; e.style.width = "auto"; });
        catResultDraggeable === null || catResultDraggeable === void 0 ? void 0 : catResultDraggeable.scrollTo(100000000, 0);
    });
    hash.addEventListener("mouseout", function () {
        var buttons = document.querySelectorAll(".cat");
        var results = document.querySelectorAll(".result");
        buttons.forEach(function (e) { e.style.color = "transparent"; e.style.backgroundSize = "75%"; });
        results.forEach(function (e) { e.style.color = "transparent"; e.style.backgroundSize = "90%"; e.style.width = "10rem"; });
    });
}
//SCREEN
var catresultConstructor = function (c) {
    if (catresult) {
        switch (c) {
            case '0':
                catresult.innerHTML = '<div class="J result">0</div>' + catresult.innerHTML;
                break;
            case '1':
                catresult.innerHTML = '<div class="G result">1</div>' + catresult.innerHTML;
                break;
            case '2':
                catresult.innerHTML = '<div class="H result">2</div>' + catresult.innerHTML;
                break;
            case '3':
                catresult.innerHTML = '<div class="I result">3</div>' + catresult.innerHTML;
                break;
            case '4':
                catresult.innerHTML = '<div class="D result">4</div>' + catresult.innerHTML;
                break;
            case '5':
                catresult.innerHTML = '<div class="E result">5</div>' + catresult.innerHTML;
                break;
            case '6':
                catresult.innerHTML = '<div class="F result">6</div>' + catresult.innerHTML;
                break;
            case '7':
                catresult.innerHTML = '<div class="A result">7</div>' + catresult.innerHTML;
                break;
            case '8':
                catresult.innerHTML = '<div class="B result">8</div>' + catresult.innerHTML;
                break;
            case '9':
                catresult.innerHTML = '<div class="C result">9</div>' + catresult.innerHTML;
                break;
            case '.':
                catresult.innerHTML = '<div class="dot">.</div>' + catresult.innerHTML;
                break;
            case '-':
                catresult.innerHTML = '<div class="inv">-</div>' + catresult.innerHTML;
                break;
        }
    }
};
var catresult = document.querySelector('#catresult');
var showResult = function () {
    if (wasLastInputANumber && catresult) {
        catresult.innerHTML = '';
        var crop = false;
        var float = 0;
        for (var _i = 0, _a = array_Of_OperaNDs[current_OperaND].split(''); _i < _a.length; _i++) {
            var c = _a[_i];
            if (crop === true) {
                float++;
            }
            ;
            if (c === ".") {
                crop = true;
            }
            ;
            catresultConstructor(c);
            if (float === 2) {
                break;
            }
        }
        getCatResultWidth(array_Of_OperaNDs[current_OperaND].split('').length);
    }
    if ((wasLastInputAnOperator || listOfOperators[current_OperaTOR] === 'equal') && catresult) {
        catresult.innerHTML = '';
        var crop = false;
        var float = 0;
        for (var _b = 0, _c = resultString.split(''); _b < _c.length; _b++) {
            var c = _c[_b];
            if (crop === true) {
                float++;
            }
            ;
            if (c === ".") {
                crop = true;
            }
            ;
            catresultConstructor(c);
            if (float === 2) {
                break;
            }
        }
        var stringLength = resultString.indexOf(".") !== -1 ? resultString.indexOf(".") + 2 : resultString.split('').length; //escaping multiple float points
        getCatResultWidth(stringLength);
    }
};
showResult();
