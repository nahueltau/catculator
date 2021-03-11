//SETUP
    let result:number = 0;
    let resultString:string = '0';
    let array_Of_OperaNDs:[string] = [""];
    let current_OperaND:number = 0;
    let listOfOperators:[string] = [""];
    let current_OperaTOR:number = 0;
    let wasLastInputAnOperator:boolean = true;
    let wasLastInputANumber:boolean = false;

   
    const catPressed = function(event: any){
        if(array_Of_OperaNDs[current_OperaND]===undefined){array_Of_OperaNDs[current_OperaND]='';}
        if(array_Of_OperaNDs[current_OperaND]==='0'){array_Of_OperaNDs[current_OperaND]=''}
        if(listOfOperators[current_OperaTOR]==='equal'){return;}
        switch(event.target.id){
            case 'J':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '0';
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                wasLastInputANumber = true;
                break;
            case 'G':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '1';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'H':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '2';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'I':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '3';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'D':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '4';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'E':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '5';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'F':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '6';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'A':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '7';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'B':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '8';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
            case 'C':
                wasLastInputAnOperator = false;
                array_Of_OperaNDs[current_OperaND] += '9';
                wasLastInputANumber = true;
                if(current_OperaTOR===0){result = Number(array_Of_OperaNDs[current_OperaND])}
                break;
        }
        showResult();
    }

    //OPERATORS
    const lcdequal: HTMLDivElement | null = document.querySelector('#lcdequal');
    const lcdplus: HTMLDivElement | null  = document.querySelector('#lcdplus'); 
    const lcddiv: HTMLDivElement | null  = document.querySelector('#lcddiv'); 
    const lcdminus: HTMLDivElement | null  = document.querySelector('#lcdminus'); 
    const lcdmul: HTMLDivElement | null  = document.querySelector('#lcdmul'); 
    const clearLcdOpColors = ()=>{
        let color = "white";
        if(lcdplus&&lcddiv&&lcdequal&&lcdminus&&lcdmul){
            lcdplus.style.color = color; 
            lcddiv.style.color = color;
            lcdequal.style.color = color;
            lcdminus.style.color = color;
            lcdmul.style.color = color;
        }
}


    const opPressed= function(event:any){
        switch(event.target.id){
            case 'plus':
                if(wasLastInputAnOperator){break;}
                listOfOperators[current_OperaTOR] = 'plus';
                wasLastInputAnOperator = true;
                if(array_Of_OperaNDs.length===1){resultString = array_Of_OperaNDs[current_OperaND]}
                current_OperaND++;
                current_OperaTOR++;
                wasLastInputANumber = false;
                clearLcdOpColors();
                if(lcdplus){lcdplus.style.color = "black";}            
                break;
            case 'minus':
                if(wasLastInputAnOperator){break;}
                listOfOperators[current_OperaTOR] = 'minus';
                wasLastInputAnOperator = true;
                if(array_Of_OperaNDs.length===1){resultString = array_Of_OperaNDs[current_OperaND]}
                current_OperaND++;
                current_OperaTOR++;
                wasLastInputANumber = false;
                clearLcdOpColors();
                if(lcdminus){lcdminus.style.color = "black"; } 
                break;
            case 'mul':
                if(wasLastInputAnOperator){break;}
                listOfOperators[current_OperaTOR] = 'mul';
                wasLastInputAnOperator = true;
                if(array_Of_OperaNDs.length===1){resultString = array_Of_OperaNDs[current_OperaND]}
                current_OperaND++;
                current_OperaTOR++;
                wasLastInputANumber = false;
                clearLcdOpColors();
                if(lcdmul){lcdmul.style.color = "black";  }
                break;
            case 'div':
                if(wasLastInputAnOperator){break;}
                listOfOperators[current_OperaTOR] = 'div';
                wasLastInputAnOperator = true;
                if(array_Of_OperaNDs.length===1){resultString = array_Of_OperaNDs[current_OperaND]}
                current_OperaND++;
                current_OperaTOR++;
                wasLastInputANumber = false;
                clearLcdOpColors();
                if(lcddiv){lcddiv.style.color = "black"; } 
                break;
            case 'equal':
                switch(listOfOperators[current_OperaTOR-1]){
                    case 'plus':
                        result += Number(array_Of_OperaNDs[current_OperaND])
                        resultString = String(result);
                        break;
                    case 'minus':
                        result -= Number(array_Of_OperaNDs[current_OperaND])
                        resultString = String(result);
                        break;
                    case 'mul':
                        result *= Number(array_Of_OperaNDs[current_OperaND])
                        resultString = String(result);
                        break;
                    case 'div':
                        result /= Number(array_Of_OperaNDs[current_OperaND])
                        resultString = String(result);
                        break;
                }
                wasLastInputANumber = false;
                listOfOperators[current_OperaTOR] = 'equal';
                clearLcdOpColors();
                if(lcdequal){lcdequal.style.color = "black";}  
                break;
            case 'ce':
                array_Of_OperaNDs[current_OperaND]='0';
                break;
            case 'cc':
                result = 0;
                resultString = '0';
                array_Of_OperaNDs = [""];//&&&&
                current_OperaND = 0;
                listOfOperators = [""];//&&&&
                current_OperaTOR = 0;
                wasLastInputAnOperator = true;
                wasLastInputANumber = false;
                break;
            case 'del':
                array_Of_OperaNDs[current_OperaND] = array_Of_OperaNDs[current_OperaND].slice(0,current_OperaND-1);
                if(array_Of_OperaNDs[current_OperaND].length === 0){array_Of_OperaNDs[current_OperaND] = '0';}
                break;
            case 'inv':
                if(wasLastInputAnOperator && listOfOperators[current_OperaTOR]!=='equal'){break;}
                if(!wasLastInputANumber){
                    result *=-1;
                    resultString = String(result);
                    console.log('result: ', resultString);}
                else{
                    array_Of_OperaNDs[current_OperaND] = String(Number(array_Of_OperaNDs[current_OperaND])*-1)}
                break;
            case 'dot':
                wasLastInputAnOperator = false;
                if(array_Of_OperaNDs[current_OperaND]===undefined){array_Of_OperaNDs[current_OperaND] = '0.';}else{array_Of_OperaNDs[current_OperaND] += '.';}
                if(listOfOperators[current_OperaTOR]==='equal'){console.log('not yet implemented')}
                break;
        }
        showResult();
    }
    //button animation
    const buttons:any= document.querySelectorAll(".buttons");
    const buttonDown = (event:any)=>{
      
       if(event.target.className.includes("buttons")){
        
        event.target.classList.add("pressed");
        
       }
    }
    const buttonUp = (event:any)=>{
       if(event.target.className.includes("buttons")){
            event.target.classList.remove("pressed");    
    }
    }
    for(let button of buttons){
        button.addEventListener('mousedown',buttonDown);
        button.addEventListener('mouseup',buttonUp);
    }
    window.addEventListener("mouseup",()=>{
        let pressed_buttons = document.querySelectorAll(".pressed");
        pressed_buttons.forEach(e=>{e.classList.remove("pressed")});
    })
    //adding events
    const catbuttons:any = document.querySelectorAll('.cat');
    for(let c of catbuttons){c.addEventListener('click',catPressed)};
    const operatorBooleanuttons:any = document.querySelectorAll('.op');
    for(let b of operatorBooleanuttons){b.addEventListener('click',opPressed)};
    //VIEW NUMBERS
    let hash = document.querySelector("#view-numbers");
    if(hash){
    hash.addEventListener("mouseover",()=>{
        let buttons:any = document.querySelectorAll(".cat");
        let results:any = document.querySelectorAll(".result");
        buttons.forEach((e:any)=>{e.style.color ="white";e.style.backgroundSize="0%";})
        results.forEach((e:any)=>{e.style.color ="white";e.style.backgroundSize="0%";e.style.width = "auto"})
    })
    hash.addEventListener("mouseout",()=>{
        let buttons:any = document.querySelectorAll(".cat");
        let results:any = document.querySelectorAll(".result");
        buttons.forEach((e:any)=>{e.style.color ="transparent";e.style.backgroundSize="75%";})
        results.forEach((e:any)=>{e.style.color ="transparent";e.style.backgroundSize="90%";e.style.width = "10rem"})
    })}
    //SCREEN
    const catresultConstructor = (c:string)=>{
        if(catresult){
        switch(c){
            case '0':
                catresult.innerHTML = '<div class="J result">0</div>'+catresult.innerHTML;
                break;
            case '1':
                catresult.innerHTML = '<div class="G result">1</div>'+catresult.innerHTML;
                break;
            case '2':
                catresult.innerHTML = '<div class="H result">2</div>'+catresult.innerHTML;
                break;
            case '3':
                catresult.innerHTML = '<div class="I result">3</div>'+catresult.innerHTML;
                break;
            case '4':
                catresult.innerHTML = '<div class="D result">4</div>'+catresult.innerHTML;
                break;
            case '5':
                catresult.innerHTML = '<div class="E result">5</div>'+catresult.innerHTML;
                break;
            case '6':
                catresult.innerHTML = '<div class="F result">6</div>'+catresult.innerHTML;
                break;
            case '7':
                catresult.innerHTML = '<div class="A result">7</div>'+catresult.innerHTML;
                break;
            case '8':
                catresult.innerHTML = '<div class="B result">8</div>'+catresult.innerHTML;
                break;
            case '9':
                catresult.innerHTML = '<div class="C result">9</div>'+catresult.innerHTML;
                break;
            case '.':
                catresult.innerHTML = '<div class="dot">.</div>'+catresult.innerHTML;
                break;
            case '-':
                catresult.innerHTML = '<div class="inv">-</div>'+catresult.innerHTML;
                break;
        }
    }
    }
    const catresult = document.querySelector('#catresult');
    const showResult = function(){
        if(wasLastInputANumber && catresult){
            catresult.innerHTML = '';
            for(let c of array_Of_OperaNDs[current_OperaND]){
                catresultConstructor(c);
            }
            
        }
        if((wasLastInputAnOperator||listOfOperators[current_OperaTOR]==='equal')&& catresult){
            catresult.innerHTML = '';
            for(let c of resultString){
                catresultConstructor(c);
            }
       
        }
    }
    showResult();


  
