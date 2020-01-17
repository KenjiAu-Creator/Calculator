const add = function(x, y) {
    return x + y;
}
const sub = function(x, y) {
    return x - y;
}
const multi = function(x, y) {
    return x * y;
}
const div = function(x, y) {
    return x / y;
}
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
    }
}