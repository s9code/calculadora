// SELECTORES

let numeros = document.querySelectorAll("#numero");
let display = document.querySelector("#display");
let operaciones = document.querySelectorAll("#operador");
let igual = document.querySelector("#igual");
let clear = document.querySelector("#clear");

// VARIABLES

let numero;

let operador;

let otroNumero;

// FUNCIONES

function sumar(num1, num2) {
    return num1 + num2;
};

function restar(num1, num2) {
    return num1 - num2;
};

function multiplicar(num1, num2) {
    return num1 * num2;
};

function dividir(num1, num2) {
    return num1 / num2;
};

function operacion (operador, num1, num2) {
    if (operador === "+") {
        return (sumar(num1, num2));
    } else if (operador === "-") {
        return (restar(num1, num2));
    } else if (operador === "*") {
        return (multiplicar(num1,num2));
    } else if ( operador === "/") {
        return (dividir(num1, num2));
    };
};

// EVENTOS

 numeros.forEach((boton) => {

    boton.addEventListener("click", () => {

        //display.textContent = boton.textContent;

        if (display.textContent === "0") {
            display.textContent = boton.textContent;
        } else {
            display.textContent = display.textContent + boton.textContent;
        };

        
        if (operador === undefined) {
            numero = display.textContent;
            numero = Number(numero);

            console.log(numero);
            //console.log("numero")

        } else {
            otroNumero = display.textContent;
            otroNumero = Number(otroNumero);

            console.log(otroNumero);
            //console.log("otroNumero");
        };

    });

});


operaciones.forEach((boton) => {

    boton.addEventListener("click", () => {

        display.textContent = "";
        
        if (otroNumero !== undefined) {
            numero = operacion(operador, numero, otroNumero);
            display.textContent = numero;
            otroNumero = undefined;
             display.textContent = "";
        }
        
        operador = boton.textContent;
        console.log(operador); 

    });

});


igual.addEventListener("click", () => {
    console.log(igual.textContent);

     display.textContent = operacion(operador, numero, otroNumero);

     let recorteDecimales = Math.trunc(display.textContent * 100) / 100;

     display.textContent = recorteDecimales;
     
     //console.log(recorteDecimales);
     
     
});

clear.addEventListener("click", () => {
    console.log(clear.textContent);

    display.textContent = "0";
    operador = undefined;
    numero = undefined;
    otroNumero = undefined;
});


// PRUEBAS 

//console.log(sumar(2, 3));
//console.log(restar(2,2));
//console.log(multiplicar(3, 3));
//console.log(dividir(6, 2));
//console.log(operacion(operador, 3, 3));






