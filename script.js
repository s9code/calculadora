
let numero;

let operador;

let otroNumero;

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function operate(operador, num1, num2) {
    if (operador === "+") {
        return sumar(num1, num2);
    } else if ( operador === "-") {
        return restar (num1, num2)
    } else if ( operador === "*") {
        return multiplicar(num1, num2);
    } else if (operador === "/") {
        return dividir(num1, num2);
    }
        
}

console.log(operate("+", 4, 9));
console.log(operate("-", 4, 2));
console.log(operate("*", 4, 2));
console.log(operate("/", 4, 2));