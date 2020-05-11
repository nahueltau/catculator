//SETUP
    let result = 0;
    let res_string = '0';
    let catline = [];
    let i = 0; 
    let currop = [];
    let e = 0;
    let opB = true;
    let inB = false;

   
    const catPressed = function(event){
        if(catline[i]===undefined){catline[i]='';}
        if(catline[i]==='0'){catline[i]=''}
        if(currop[e]==='equal'){return;}
        switch(event.target.id){
            case 'J':
                opB = false;
                catline[i] += '0';
                if(e===0){result = Number(catline[i])}
                inB = true;
                break;
            case 'G':
                opB = false;
                catline[i] += '1';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'H':
                opB = false;
                catline[i] += '2';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'I':
                opB = false;
                catline[i] += '3';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'D':
                opB = false;
                catline[i] += '4';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'E':
                opB = false;
                catline[i] += '5';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'F':
                opB = false;
                catline[i] += '6';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'A':
                opB = false;
                catline[i] += '7';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'B':
                opB = false;
                catline[i] += '8';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
            case 'C':
                opB = false;
                catline[i] += '9';
                inB = true;
                if(e===0){result = Number(catline[i])}
                break;
        }
        showResult();
    }

    //OPERATORS
    const screenop = document.querySelector('#screenop');


    const opPressed= function(event){
        switch(event.target.id){
            case 'plus':
                if(opB){break;}
                currop[e] = 'plus';
                opB = true;
                if(catline.length===1){res_string = catline[i]}
                i++;
                e++;
                inB = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplusp"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'minus':
                if(opB){break;}
                currop[e] = 'minus';
                opB = true;
                if(catline.length===1){res_string = catline[i]}
                i++;
                e++;
                inB = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminusp"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'mul':
                if(opB){break;}
                currop[e] = 'mul';
                opB = true;
                if(catline.length===1){res_string = catline[i]}
                i++;
                e++;
                inB = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmulp"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'div':
                if(opB){break;}
                currop[e] = 'div';
                opB = true;
                if(catline.length===1){res_string = catline[i]}
                i++;
                e++;
                inB = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddivp"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'equal':
                switch(currop[e-1]){
                    case 'plus':
                        result += Number(catline[i])
                        res_string = String(result);
                        break;
                    case 'minus':
                        result -= Number(catline[i])
                        res_string = String(result);
                        break;
                    case 'mul':
                        result *= Number(catline[i])
                        res_string = String(result);
                        break;
                    case 'div':
                        result /= Number(catline[i])
                        res_string = String(result);
                        break;
                }
                inB = false;
                currop[e] = 'equal';
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequalp"></img>';
                break;
            case 'ce':
                catline[i]='0';
                break;
            case 'cc':
                result = 0;
                res_string = '0';
                catline.length = 0;
                i = 0;
                currop.length = 0;
                e = 0;
                opB = true;
                inB = false;
                screenop.innerHTML = '<img src="buttons/emptybutton.png" alt="" id="lcddiv"><img src="buttons/emptybutton.png" alt="" id="lcdmul"><img src="buttons/emptybutton.png" alt="" id="lcdminus"><img src="buttons/emptybutton.png" alt="" id="lcdplus"><img src="buttons/emptybutton.png" alt="" id="lcdequal"></img>';
                break;
            case 'del':
                catline[i] = catline[i].slice(0,i-1);
                if(catline[i].length === 0){catline[i] = '0';}
                break;
            case 'inv':
                if(opB && currop[e]!=='equal'){break;}
                if(!inB){
                    result *=-1;
                    res_string = String(result);
                    console.log('result: ', res_string);}
                else{
                    catline[i] = String(Number(catline[i])*-1)}
                break;
            case 'dot':
                opB = false;
                if(catline[i]===undefined){catline[i] = '0.';}else{catline[i] += '.';}
                if(currop[e]==='equal'){console.log('not yet implemented')}
                break;
        }
        showResult();
    }
    //pressed anim
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
    const opbuttons = document.querySelectorAll('.op');
    for(b of opbuttons){b.setAttribute('onclick','opPressed(event)')};

    //SCREEN

    const catresult = document.querySelector('#catresult');
    const showResult = function(){
        if(inB){
            catresult.innerHTML = '';
            for(c of catline[i]){
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
        if(opB||currop[e]==='equal'){
            catresult.innerHTML = '';
            for(c of res_string){
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


  
