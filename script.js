// SELECTORES

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operadorBtn = document.querySelectorAll(".operator");

// VARIABLES --------------

let numero;

let operador;

let otroNumero;

// FUNCIONES --------------

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
        
};

// EVENTOS --------------


// BOTONES NUMÉRICOS

// Mostrar números en pantalla

// Construir primer número

// Construir segundo número


numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (operador === undefined) {
            if (display.textContent === "0") {
            display.textContent = button.textContent;
            numero = display.textContent;
            } else {
                display.textContent = display.textContent + button.textContent;
                numero = display.textContent;
            }
        } else {
            if (otroNumero === undefined) {
                display.textContent = button.textContent;
                otroNumero = display.textContent;
            } else {
                display.textContent = display.textContent + button.textContent;
                otroNumero = display.textContent;
            }
        }
        
    });
});


// BOTONES OPERADORES

// Guardar primer número

// Guardar operador


operadorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        numero = display.textContent;
        operador = button.textContent;

        console.log(numero);
        console.log(operador);
    });
});


// BOTÓN =

// Llamar a operate()

// Mostrar resultado



