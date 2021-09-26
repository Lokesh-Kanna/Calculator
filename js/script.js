// Creating a main box
var mainBox = document.createElement('div');
mainBox.setAttribute('class', 'mainbox');
document.body.append(mainBox);

// Creating calculator body
var calcBody = document.createElement('div');
calcBody.setAttribute('class', 'calcBody')
calcBody.setAttribute('id', 'calcBody');
mainBox.appendChild(calcBody);

// Creating display
var display = document.createElement('div');
display.setAttribute('id', 'display');
calcBody.appendChild(display);

// creating button line 2 flex:
var line1 = document.createElement('div');
line1.setAttribute('class', 'btnLine1');
line1.setAttribute('id', 'btnLine1');
calcBody.appendChild(line1);

// creating button C
var btnC = document.createElement('button');
btnC.setAttribute('id', 'clear');
btnC.setAttribute('class', 'btn');
btnC.setAttribute('class', 'operator');
btnC.innerHTML = "C";
line1.appendChild(btnC);

// Creating button %
var btnMod = document.createElement('button');
btnMod.setAttribute('id', '%');
btnMod.setAttribute('class', 'btn');
btnMod.setAttribute('class', 'operator');
btnMod.innerHTML = "%";
line1.appendChild(btnMod);

var btnDiv = document.createElement('button');
btnDiv.setAttribute('id', '/');
btnDiv.setAttribute('class', 'btn');
btnDiv.setAttribute('class', 'operator');
btnDiv.innerHTML = "/";
line1.appendChild(btnDiv);

// creating button line 2 flex:
var line2 = document.createElement('div');
line2.setAttribute('class', 'btnLine2');
line2.setAttribute('id', 'btnLine2');
calcBody.appendChild(line2);

var btn7 = document.createElement('button');
btn7.setAttribute('id', '7');
btn7.setAttribute('class', 'btn');
btn7.setAttribute('class', 'number');
btn7.innerHTML = "7";
line2.appendChild(btn7);

var btn8 = document.createElement('button');
btn8.setAttribute('id', '8');
btn8.setAttribute('class', 'btn');
btn8.setAttribute('class', 'number');
btn8.innerHTML = "8";
line2.appendChild(btn8);

var btn9 = document.createElement('button');
btn9.setAttribute('id', '9');
btn9.setAttribute('class', 'btn');
btn9.setAttribute('class', 'number');
btn9.innerHTML = "9";
line2.appendChild(btn9);

var btnX = document.createElement('button');
btnX.setAttribute('id', '*');
btnX.setAttribute('class', 'btn');
btnX.setAttribute('class', 'operator');
btnX.innerHTML = "X";
line2.appendChild(btnX);

// creating button line 3 flex:
var line3 = document.createElement('div');
line3.setAttribute('class', 'btnLine3');
line3.setAttribute('id', 'btnLine3');
calcBody.appendChild(line3);

var btn4 = document.createElement('button');
btn4.setAttribute('id', '4');
btn4.setAttribute('class', 'btn');
btn4.setAttribute('class', 'number');
btn4.innerHTML = "4";
line3.appendChild(btn4);

var btn5 = document.createElement('button');
btn5.setAttribute('id', '5');
btn5.setAttribute('class', 'btn');
btn5.setAttribute('class', 'number');
btn5.innerHTML = "5";
line3.appendChild(btn5);

var btn6 = document.createElement('button');
btn6.setAttribute('id', '6');
btn6.setAttribute('class', 'btn');
btn6.setAttribute('class', 'number');
btn6.innerHTML = "6";
line3.appendChild(btn6);

var btnSub = document.createElement('button');
btnSub.setAttribute('id', '-');
btnSub.setAttribute('class', 'btn');
btnSub.setAttribute('class', 'operator');
btnSub.innerHTML = "-";
btnSub.style.fontSize = "20px";
line3.appendChild(btnSub);

// creating button line 4 flex:
var line4 = document.createElement('div');
line4.setAttribute('class', 'btnLine4');
line4.setAttribute('id', 'btnLine4');
calcBody.appendChild(line4);

var btn1 = document.createElement('button');
btn1.setAttribute('id', '1');
btn1.setAttribute('class', 'btn');
btn1.setAttribute('class', 'number');
btn1.innerHTML = "1";
line4.appendChild(btn1);

var btn2 = document.createElement('button');
btn2.setAttribute('id', '2');
btn2.setAttribute('class', 'btn');
btn2.setAttribute('class', 'number');
btn2.innerHTML = "2";
line4.appendChild(btn2);

var btn3 = document.createElement('button');
btn3.setAttribute('id', '3');
btn3.setAttribute('class', 'btn');
btn3.setAttribute('class', 'number');
btn3.innerHTML = "3";
line4.appendChild(btn3);

var btnAdd = document.createElement('button');
btnAdd.setAttribute('id', '+');
btnAdd.setAttribute('class', 'btn');
btnAdd.setAttribute('class', 'operator');
btnAdd.innerHTML = "+";
line4.appendChild(btnAdd);

// creating button line 4 flex:
var line5 = document.createElement('div');
line5.setAttribute('class', 'btnLine5');
line5.setAttribute('id', 'btnLine5');
calcBody.appendChild(line5);

var btn0 = document.createElement('button');
btn0.setAttribute('id', '0');
btn0.setAttribute('class', 'btn');
btn0.setAttribute('class', 'number');
btn0.innerHTML = "0";
line5.appendChild(btn0);

var btnEq = document.createElement('button');
btnEq.setAttribute('id', 'equal');
btnEq.setAttribute('class', 'btn');
btnEq.setAttribute('class', 'btnEq');
btnEq.setAttribute('class', 'operator');
btnEq.innerHTML = "=";
line5.appendChild(btnEq);


// Functions:
function getOutput() {
    return document.getElementById('display').innerHTML;
}
function printOutput(num) {
    if(num == NaN){
        alert("Only nubers are allowed");
    }
    else {
        document.getElementById('display').innerHTML = num;
    }
}


var number = document.getElementsByClassName('number');
for(var i=0; i<number.length; i++) {
    number[i].addEventListener('click', function() {
        var output = getOutput();
        if(output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    });
}

var operator = document.getElementsByClassName('operator');
for(var i=0; i<operator.length; i++) {
    operator[i].addEventListener('click', function() {
        var output = getOutput();
        if(this.id == 'clear') {
            output = '';
            printOutput(output);
        }
        else if(this.id == 'equal') {
            var res = eval(output);
            printOutput(res);
        }
        else {
            output = output + this.id;
            printOutput(output);
        }
    })
}


