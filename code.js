// Functions 
const add = function(x, y) {
    return Number(x) + Number(y);
};
const sub = function(x, y) {
    return x - y;
};
const multi = function(x, y) {
    return x * y;
};
const div = function(x, y) {
    if( y == 0) {
        alert("ERROR CANNOT DIVIDE BY 0");
        return 0;
    }
    return x / y;
};
var operate = function(operator, x,  y) {
    switch(operator) {
        case "+":
            return add(x, y);
            break;
        case "subtract":
            return sub(x, y);
            break;
        case "-":
            return sub(x, y);
            break;
        case "*":
            return multi(x, y);
            break;
        case "/":
            return div(x, y);
            break;
    };
};
// Mapping number buttons and working display
var displayValueArray, displayValueString, X, Y, xString, Val, Op, ans;
displayValueString = "";
var zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    displayValueString += "0";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var one = document.querySelector("#one");
one.addEventListener('click', () => {
    displayValueString += "1";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var two = document.querySelector("#two");
two.addEventListener('click', () => {
    displayValueString += "2";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var three = document.querySelector("#three");
three.addEventListener('click', () => {
    displayValueString += "3";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var four = document.querySelector("#four");
four.addEventListener('click', () => {
    displayValueString += "4";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var five = document.querySelector("#five");
five.addEventListener('click', () => {
    displayValueString += "5";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var six = document.querySelector("#six");
six.addEventListener('click', () => {
    displayValueString += "6";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    displayValueString += "7";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    displayValueString += "8";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    displayValueString += "9";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
// DECIMAL Function
var decimal = document.querySelector("#DECIMAL");
decimal.addEventListener("click", () => {
    displayValueArray.push('.');
    displayValueString += ".";
    document.getElementById("DISPLAY").innerHTML = displayValueString;
})
// DELETE Function
var del = document.querySelector("#DELETE");
del.addEventListener("click", () => {
    displayValueArray.pop();
    displayValueString = displayValueString.slice(0, displayValueString.length-1);
    document.getElementById('DISPLAY').innerHTML = displayValueString;
})
// CLEAR Operator
var clear = document.querySelector('#CLEAR');
clear.addEventListener('click', () => {
    displayValueString = "";
    displayValueArray = [];
    delete X;
    delete Y;
    xString = "";
    document.getElementById("DISPLAY").innerHTML = 0;
});
// Operators
var ADD = document.querySelector('#ADD');
ADD.addEventListener('click', () => {
    displayValueString += "+";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    displayValueArray =[];
});
var SUBTRACT = document.querySelector('#SUBTRACT');
SUBTRACT.addEventListener('click', () => {
    displayValueString += "-";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    displayValueArray = [];
});
var MULTIPLY = document.querySelector('#MULTIPLY');
MULTIPLY.addEventListener('click', () => {
    displayValueString += "*";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    displayValueArray =[];
});
var DIVIDE = document.querySelector('#DIVIDE');
DIVIDE.addEventListener('click', () => {
    displayValueString += "/";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    displayValueArray =[];
});
// Equals
var EQUAL = document.querySelector('#EQUALS');
EQUAL.addEventListener('click', () => {
    numbers = displayValueString.split(/[+-/*]/);
    operators = displayValueString.split(/[123456789]/);
    operatorsTrim = operators.slice(1,operators.length-1);

    // Times and Divide first then Add and Sub
    while(operatorsTrim.length >= 1) {
        times = operatorsTrim.indexOf("*");
        if(times > -1) {
            ans = operate(operatorsTrim[times],numbers[times],numbers[times+1]);
            operatorsTrim.splice(times,1);
            numbers.splice(times,2,ans);
            continue;
        }
        divide = operatorsTrim.indexOf("/");
        if(divide > -1) {
            ans = operate(operatorsTrim[divide],numbers[divide],numbers[divide+1]);
            operatorsTrim.splice(divide,1);
            numbers.splice(divide,2,ans);
            continue;
        };
        Addition = operatorsTrim.indexOf("+");
        if(Addition > -1) {
            ans = operate(operatorsTrim[Addition],numbers[Addition],numbers[Addition+1]);
            operatorsTrim.splice(Addition,1);
            numbers.splice(Addition, 2, ans);
            continue;
        };
        Subtraction = operatorsTrim.indexOf("-");
        if(Subtraction > -1) {
            ans = operate(operatorsTrim[Subtraction],numbers[Subtraction],numbers[Subtraction+1]);
            operatorsTrim.splice(Subtraction,1);
            numbers.splice(Subtraction,2,ans);
            continue;
        };
    };
    ans = (Math.round(numbers*1000)/1000);
    displayValueString = ans;
    document.getElementById("DISPLAY").innerHTML = displayValueString
});
// KEYBOARD SUPPORT
window.addEventListener('keydown', function(e) {
    // NUMBERS
    switch (e.keyCode) {
        case (48):
            displayValueString += "0";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (96):
            displayValueString += "0";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (49):
            displayValueString += "1";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (97):
            displayValueString += "1";
            document.getElementById('DISPLAY').innerHTML = displayValueString;  
            break  
        case (50):
            displayValueString += "2";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (98):
            displayValueString += "2";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (51):
            displayValueString += "3";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (99):
            displayValueString += "3";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (52):
            displayValueString += "4";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (100):
            displayValueString += "4";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (53):
            displayValueString += "5";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (101):
            displayValueString += "5";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (54):
            displayValueString += "6";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (102):
            displayValueString += "6";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (55):
            displayValueString += "7";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (103):
            displayValueString += "7";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (104):
            displayValueString += "8";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (57):
            displayValueString += "9";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        case (105):
            displayValueString += "9";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
// OPERATORS
        // ADD
        case (187):
            displayValueString += "+"
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break;
        case (107):
            displayValueString += "+";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break;
        // SUBTRACT
        case (189):
            displayValueString += "-";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break;
        case (109):
            displayValueString += "-";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break;
        // EQUAL / ENTER
        case (13):
            numbers = displayValueString.split(/[+-/*]/);
            operators = displayValueString.split(/[123456789]/);
            operatorsTrim = operators.slice(1,operators.length-1);

            // Times and Divide first then Add and Sub
            while(operatorsTrim.length >= 1) {
                times = operatorsTrim.indexOf("*");
                if(times > -1) {
                    ans = operate(operatorsTrim[times],numbers[times],numbers[times+1]);
                    operatorsTrim.splice(times,1);
                    numbers.splice(times,2,ans);
                    continue;
                }
                divide = operatorsTrim.indexOf("/");
                if(divide > -1) {
                    ans = operate(operatorsTrim[divide],numbers[divide],numbers[divide+1]);
                    operatorsTrim.splice(divide,1);
                    numbers.splice(divide,2,ans);
                    continue;
                };
                Addition = operatorsTrim.indexOf("+");
                if(Addition > -1) {
                    ans = operate(operatorsTrim[Addition],numbers[Addition],numbers[Addition+1]);
                    operatorsTrim.splice(Addition,1);
                    numbers.splice(Addition, 2, ans);
                    continue;
                };
                Subtraction = operatorsTrim.indexOf("-");
                if(Subtraction > -1) {
                    ans = operate(operatorsTrim[Subtraction],numbers[Subtraction],numbers[Subtraction+1]);
                    operatorsTrim.splice(Subtraction,1);
                    numbers.splice(Subtraction,2,ans);
                    continue;
                };
            };
            ans = (Math.round(numbers*1000)/1000);
            displayValueString = ans;
            document.getElementById("DISPLAY").innerHTML = displayValueString
            break;
        // MULTIPLY
        case (106):
            displayValueString += "*";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break;
        // DIVIDE
        case (111):
            displayValueString += "/";
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break;
        // DELETE FUNCTION
        case (8):
            displayValueString = displayValueString.slice(0, displayValueString.length-1);
            document.getElementById('DISPLAY').innerHTML = displayValueString;
            break
        // DECIMAL
        case 190:
            if (!displayValueArray.includes(".")) {
                displayValueString += ".";
                document.getElementById("DISPLAY").innerHTML = displayValueString;
            };
        case 110:
            if (!displayValueArray.includes(".")) {
                displayValueString += ".";
                document.getElementById("DISPLAY").innerHTML = displayValueString;
            };
        }
});