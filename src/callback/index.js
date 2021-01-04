//EJERCICIO 1
function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, suma));


//EJERCICIO 2
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);


//EJERCICIO 3

function multiply(x, y) {
    return x * y;
}

function printSquare(x) {
    let s = multiply(x, x);
    return console.log(s);
}

printSquare(5);
console.log(multiply(5, 2));

