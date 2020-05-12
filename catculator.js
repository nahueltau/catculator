//SETUP
    let result = 0;
    let resultString = '0';
    let catArray = [];
    let i = 0; 
    let currentOperation = [];
    let e = 0;
    let operatorBoolean = true; //was last input an operator?
    let numberBoolean = false; //was last input a number?

   
    const catPressed = function(event){
        if(catArray[i]===undefined){catArray[i]='';}
        if(catArray[i]==='0'){catArray[i]=''}
        if(currentOperation[e]==='equal'){return;}
        switch(event.target.id){
            case 'J':
                operatorBoolean = false;
                catArray[i] += '0';
                if(e===0){result = Number(catArray[i])}
                numberBoolean = true;
                break;
            case 'G':
                operatorBoolean = false;
                catArray[i] += '1';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'H':
                operatorBoolean = false;
                catArray[i] += '2';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'I':
                operatorBoolean = false;
                catArray[i] += '3';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'D':
                operatorBoolean = false;
                catArray[i] += '4';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'E':
                operatorBoolean = false;
                catArray[i] += '5';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'F':
                operatorBoolean = false;
                catArray[i] += '6';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'A':
                operatorBoolean = false;
                catArray[i] += '7';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'B':
                operatorBoolean = false;
                catArray[i] += '8';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
            case 'C':
                operatorBoolean = false;
                catArray[i] += '9';
                numberBoolean = true;
                if(e===0){result = Number(catArray[i])}
                break;
        }
        showResult();
    }

    //OPERATORS
    const screenop = document.querySelector('#screenop'); //operators on the display


    const opPressed= function(event){
        switch(event.target.id){
            case 'plus':
                if(operatorBoolean){break;}
                currentOperation[e] = 'plus';
                operatorBoolean = true;
                if(catArray.length===1){resultString = catArray[i]}
                i++;
                e++;
                numberBoolean = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplusp"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'minus':
                if(operatorBoolean){break;}
                currentOperation[e] = 'minus';
                operatorBoolean = true;
                if(catArray.length===1){resultString = catArray[i]}
                i++;
                e++;
                numberBoolean = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminusp"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'mul':
                if(operatorBoolean){break;}
                currentOperation[e] = 'mul';
                operatorBoolean = true;
                if(catArray.length===1){resultString = catArray[i]}
                i++;
                e++;
                numberBoolean = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmulp"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'div':
                if(operatorBoolean){break;}
                currentOperation[e] = 'div';
                operatorBoolean = true;
                if(catArray.length===1){resultString = catArray[i]}
                i++;
                e++;
                numberBoolean = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddivp"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'equal':
                switch(currentOperation[e-1]){
                    case 'plus':
                        result += Number(catArray[i])
                        resultString = String(result);
                        break;
                    case 'minus':
                        result -= Number(catArray[i])
                        resultString = String(result);
                        break;
                    case 'mul':
                        result *= Number(catArray[i])
                        resultString = String(result);
                        break;
                    case 'div':
                        result /= Number(catArray[i])
                        resultString = String(result);
                        break;
                }
                numberBoolean = false;
                currentOperation[e] = 'equal';
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequalp"></img>';
                break;
            case 'ce':
                catArray[i]='0';
                break;
            case 'cc':
                result = 0;
                resultString = '0';
                catArray.length = 0;
                i = 0;
                currentOperation.length = 0;
                e = 0;
                operatorBoolean = true;
                numberBoolean = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'del':
                catArray[i] = catArray[i].slice(0,i-1);
                if(catArray[i].length === 0){catArray[i] = '0';}
                break;
            case 'inv':
                if(operatorBoolean && currentOperation[e]!=='equal'){break;}
                if(!numberBoolean){
                    result *=-1;
                    resultString = String(result);
                    console.log('result: ', resultString);}
                else{
                    catArray[i] = String(Number(catArray[i])*-1)}
                break;
            case 'dot':
                operatorBoolean = false;
                if(catArray[i]===undefined){catArray[i] = '0.';}else{catArray[i] += '.';}
                if(currentOperation[e]==='equal'){console.log('not yet implemented')}
                break;
        }
        showResult();
    }
    //button animation
    const buttons = document.getElementsByClassName("buttons");
    const buttonDown = (e)=>{
      
       if(e.target.className.includes("buttons")){
        if(e.target.className.includes("cat")){
        e.target.className = "buttons pressed cat";
        }else{
            e.target.className = "buttons pressed op";
        }
       }
    }
    const buttonUp = (e)=>{
       if(e.target.className.includes("buttons")){
        if(e.target.className.includes("cat")){
            e.target.className = "buttons cat";
            }else{
                e.target.className = "buttons op";
            }
    }
    }
    for(button of buttons){
        button.setAttribute('onmousedown','buttonDown(event)', {capture:true})
        button.setAttribute('onmouseup','buttonUp(event)',  {capture:true})
    }
    //adding events
    const catbuttons = document.querySelectorAll('.cat');
    for(c of catbuttons){c.setAttribute('onclick','catPressed(event)')};
    const operatorBooleanuttons = document.querySelectorAll('.op');
    for(b of operatorBooleanuttons){b.setAttribute('onclick','opPressed(event)')};

    //SCREEN

    const catresult = document.querySelector('#catresult');
    const showResult = function(){
        if(numberBoolean){
            catresult.innerHTML = '';
            for(c of catArray[i]){
                switch(c){
                    case '0':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="J"></img>'+catresult.innerHTML;
                        break;
                    case '1':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="G"></img>'+catresult.innerHTML;
                        break;
                    case '2':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="H"></img>'+catresult.innerHTML;
                        break;
                    case '3':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="I"></img>'+catresult.innerHTML;
                        break;
                    case '4':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="D"></img>'+catresult.innerHTML;
                        break;
                    case '5':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="E"></img>'+catresult.innerHTML;
                        break;
                    case '6':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="F"></img>'+catresult.innerHTML;
                        break;
                    case '7':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="A"></img>'+catresult.innerHTML;
                        break;
                    case '8':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="B"></img>'+catresult.innerHTML;
                        break;
                    case '9':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="C"></img>'+catresult.innerHTML;
                        break;
                    case '.':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="dot"></img>'+catresult.innerHTML;
                        break;
                    case '-':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="inv"></img>'+catresult.innerHTML;
                        break;
                }
            }
            
        }
        if(operatorBoolean||currentOperation[e]==='equal'){
            catresult.innerHTML = '';
            for(c of resultString){
                switch(c){
                    case '0':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="J"></img>'+catresult.innerHTML;
                        break;
                    case '1':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="G"></img>'+catresult.innerHTML;
                        break;
                    case '2':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="H"></img>'+catresult.innerHTML;
                        break;
                    case '3':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="I"></img>'+catresult.innerHTML;
                        break;
                    case '4':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="D"></img>'+catresult.innerHTML;
                        break;
                    case '5':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="E"></img>'+catresult.innerHTML;
                        break;
                    case '6':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="F"></img>'+catresult.innerHTML;
                        break;
                    case '7':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="A"></img>'+catresult.innerHTML;
                        break;
                    case '8':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="B"></img>'+catresult.innerHTML;
                        break;
                    case '9':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="C"></img>'+catresult.innerHTML;
                        break;
                    case '.':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="dot"></img>'+catresult.innerHTML;
                        break;
                    case '-':
                        catresult.innerHTML = '<img src="buttons/emptybutton.png" alt="" class="inv"></img>'+catresult.innerHTML;
                        break;
                }
            }
       
        }
    }
    showResult();


  
