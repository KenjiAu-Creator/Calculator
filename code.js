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
var displayValueArray, displayValueString, X, Y, xString, Val, Op, ans;
Val = [];
Op =[];
ans = 0;
displayValueArray = [];
displayValueString = "";
var zero = document.querySelector("#zero");
zero.addEventListener('click', () => {
    displayValueArray.push(0)
    displayValueString += "0";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var one = document.querySelector("#one");
one.addEventListener('click', () => {
    displayValueArray.push(1);
    displayValueString += "1";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var two = document.querySelector("#two");
two.addEventListener('click', () => {
    displayValueArray.push(2);
    displayValueString += "2";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var three = document.querySelector("#three");
three.addEventListener('click', () => {
    displayValueArray.push(3);
    displayValueString += "3";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var four = document.querySelector("#four");
four.addEventListener('click', () => {
    displayValueArray.push(4);
    displayValueString += "4";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var five = document.querySelector("#five");
five.addEventListener('click', () => {
    displayValueArray.push(5);
    displayValueString += "5";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var six = document.querySelector("#six");
six.addEventListener('click', () => {
    displayValueArray.push(6);
    displayValueString += "6";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    displayValueArray.push(7);
    displayValueString += "7";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    displayValueArray.push(8);
    displayValueString += "8";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
});
var nine = document.querySelector("#nine");
nine.addEventListener('click', () => {
    displayValueArray.push(9);
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
    Val.push(displayValueArray.join(""));
    Op.push("add");
    displayValueString += "+";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    displayValueArray =[];
});
var SUBTRACT = document.querySelector('#SUBTRACT');
SUBTRACT.addEventListener('click', () => {
    Val.push(displayValueArray.join(""));
    Op.push("subtract");
    displayValueString += "-";
    document.getElementById('DISPLAY').innerHTML = displayValueString;
    displayValueArray = [];
});
// var MULTIPLY = document.querySelector('#MULTIPLY');
// MULTIPLY.addEventListener('click', () => {
//     if( !xString) {
//         xString = displayValueString;
//         displayValueString = displayValueArray.concat("*").join("");
//         displayValueArray = [];
//     }
//     document.getElementById('DISPLAY').innerHTML = displayValueString;
//     operator = "multiply";
// });
// var DIVIDE = document.querySelector('#DIVIDE');
// DIVIDE.addEventListener('click', () => {
//     if( !xString) {
//         xString = displayValueString;
//         displayValueString = displayValueArray.concat("/").join("");
//         displayValueArray = [];
//     }
//     document.getElementById('DISPLAY').innerHTML = displayValueString;
//     operator = "divide";
// });
// Equals
var EQUAL = document.querySelector('#EQUALS');
EQUAL.addEventListener('click', () => {
    if( ans == 0) {
        Val.push(displayValueArray.join(""));
    }
    if (Val.length <= 1) {
        alert("ERROR! Missing arguments for expression")
    };
    for(let i = 0;i < Val.length-1; i++) {
        console.log(i)
        console.log(Val)
        Val[i+1] = operate(Op[i],Val[i], Val[i+1]);
        
    };
    console.log(Val)
    displayValueString = Val[Val.length-1];
    document.getElementById("DISPLAY").innerHTML = displayValueString;
    displayValueArray = [];
    Val = [displayValueString];
    Op = []
    ans = Val;
});