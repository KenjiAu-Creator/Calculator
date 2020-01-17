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
    return x / y;
};
var operate = function(operator, x,  y) {
    switch(operator) {
        case "add":
            return add(x, y);
            break;
        case "subtract":
            return sub(x, y);
            break;
        case "multiply":
            return multi(x, y);
            break;
        case "divide":
            return div(x, y);
            break;
    };
};
// Mapping number buttons and working display
var displayValue, displayValueArray, displayValueString, X, Y, xString;
displayValueArray = [];
displayValueString = "";
var zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    displayValueArray.push(0)
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var one = document.querySelector("#one");
one.addEventListener('click', () => {
    displayValueArray.push(1);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var two = document.querySelector("#two");
two.addEventListener('click', () => {
    displayValueArray.push(2);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var three = document.querySelector("#three");
three.addEventListener('click', () => {
    displayValueArray.push(3);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var four = document.querySelector("#four");
four.addEventListener('click', () => {
    displayValueArray.push(4);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var five = document.querySelector("#five");
five.addEventListener('click', () => {
    displayValueArray.push(5);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var six = document.querySelector("#six");
six.addEventListener('click', () => {
    displayValueArray.push(6);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    displayValueArray.push(7);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    displayValueArray.push(8);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    displayValueArray.push(9);
    displayValueString = displayValueArray.join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
// CLEAR Operator
var clear = document.querySelector('#CLEAR');
clear.addEventListener('click', () => {
    displayValueArray = [];
    document.getElementById("DISPLAY").innerHTML = 0;
});
// Operators
var ADD = document.querySelector('#ADD');
ADD.addEventListener('click', () => {
    if( !xString) {
        xString = displayValueString;
        displayValueArray = [];
    }
    displayValueString = displayValueArray.concat("+").join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    operator = "add";
});
var SUBTRACT = document.querySelector('#SUBTRACT');
SUBTRACT.addEventListener('click', () => {
    if( !xString) {
        xString = displayValueString;
        displayValueArray = [];
    }
    displayValueString = displayValueArray.concat("-").join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    operator = "subtract";
});
var MULTIPLY = document.querySelector('#MULTIPLY');
MULTIPLY.addEventListener('click', () => {
    if( !xString) {
        xString = displayValueString;
        displayValueArray = [];
    }
    displayValueString = displayValueArray.concat("*").join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    operator = "multiply";
});
var DIVIDE = document.querySelector('#DIVIDE');
DIVIDE.addEventListener('click', () => {
    if( !xString) {
        xString = displayValueString;
        displayValueArray = [];
    }
    displayValueString = displayValueArray.concat("/").join("");
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    operator = "divide";
});
// Equals
var EQUAL = document.querySelector('#EQUALS');
EQUAL.addEventListener('click', () => {
    X = xString;
    Y = displayValueArray.join("");
    ans = operate(operator, X, Y);
    document.getElementById("DISPLAY").innerHTML = ans;
});