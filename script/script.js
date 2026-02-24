
// guarda el numero que esta escribiendo en el diplay
let currentValue = "";

//  guarda el numero que ingrese antes de precionar el operador... operador(+, -, *, /) 
let previousValue = "";

// guardar el operador seleccionado (-, +, *, /)
let operator = null;


//-----------------------------------------------
// ELEMENTOS DOM
//-----------------------------------------------

//display: pantalla de la calculadora
const display = document.getElementById("display")

// todos los boones de numero y punto
const numberButtons = document.querySelectorAll(".num")

// Botones de operadores (+. -, *, /)
const operatorButtons = document.querySelectorAll(".op")

// boton de igual ( = )
const btnEqual = document.getElementById("btn-equal")

// boton clear
const btnClear = document.getElementById("btn-clear")

// btnSign: botón "+/-" para cambiar el signo
const btnSign = document.getElementById("btn-sign")

// --------------------------------------------------
// EVENTOS
// --------------------------------------------------

// EVENTOS PARA NUMEROS
// al hacer clic en caulquier boton de numero, llamamos a pressNumber

numberButtons.forEach(boton => {
    boton.addEventListener("click", () => {
        pressNumber(boton.textContent); // pasamos el numero al display
    });
});

// EVENTOS PARA LOS OPERADORES
// al hacer click en un operador, se guarda el valor actual en el operador
operatorButtons.forEach(boton => {
    boton.addEventListener("click", () => {
        pressOperator(boton.textContent);
    });
});

// EVENTO PARA " = "
// al presionar = ,  realizamos la operacion
btnEqual.addEventListener("click", calculate);

// EVENTO CLEAR
// CUANDO SE PREISONA CLEAR LIMPIA TODO
btnClear.addEventListener("click", clearAll);

// EVENTO PARA +/-
// CAMBIAR DE SIGNO DEL NUMERO ACTUAL
btnSign.addEventListener("click", changeSign);

// --------------------------------------------
// Funciones
// --------------------------------------------

//funcion para ingresar numero
function pressNumber(num) {
    currentValue += num; // conectamos el numero actual

    display.value = currentValue; // mostramos el valor en pantalla

}

// funcion para ingresar operadores
function pressOperator(op) {
    // si no hay numero, actual, no hace nada
    if (currentValue === "") return;

    // aca guado el numero en el previusValue
    previousValue = currentValue;

    // guardamos el operador que seleccionamos
    operator = op;

    // limpia el currentValue para escribir el siguiente numero
    currentValue = ""
}


// funcion que calcula el resultado

function calculate() {
    // si falta algun dato, no hace nada
    if (!previousValue || !currentValue || !operator) return;

    // se convierte los valores de texto a numero
    const a = parseFloat(previousValue);
    const b = parseFloat(currentValue);
    let result;


    // depende el operador hace la operacion
    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Error"; break; // aca evito divison por 0
    }

    // guardo el resultado en el currenValue
    currentValue = result.toString();

    // limpia el previousVAlue y operador para la siguiente operacion
    previousValue = "";
    operator = null;
     // Mostramos el resultado en pantalla
     display.value = currentValue;
    }
    
    // Función para limpiar todo
    function clearAll() {
        currentValue = "";
        previousValue = "";
        operator = null;
        display.value = "";
    }
    
    // Función para cambiar el signo del número actual
    function changeSign() {
        if (!currentValue) return; // si no hay número, no hace nada
    
        currentValue = (parseFloat(currentValue) * -1).toString();
        display.value = currentValue;
    }




    /* RESUMEN DE VARIABLES Y FUNCIONES
Variable / Función	Qué hace
currentValue	Número que estás escribiendo ahora
previousValue	Número ingresado antes de seleccionar un operador
operator	Guarda el operador seleccionado (+, -, *, /)
display	Elemento input donde se muestra el valor
numberButtons	Botones de números (0-9 y .)
operatorButtons	Botones de operadores (+, -, *, /)
btnEqual	Botón "="
btnClear	Botón "C"
btnSign	Botón "+/-"
pressNumber(num)	Agrega un número al display
pressOperator(op)	Guarda el operador y el número actual
calculate()	Calcula la operación y muestra el resultado
clearAll()	Limpia todo (display y variables)
changeSign()	Cambia el signo del número actual*/