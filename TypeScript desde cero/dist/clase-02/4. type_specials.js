"use strict";
// Tipos Especiales en TypeScript
// Tipo: Any
var desconocido; // Seria como: var desconocido;
desconocido = 'Hola';
desconocido = 2;
var desconocido2 = 2;
desconocido2 = 'Hola';
// Tipo: Void
var vacio;
var mostrarContenido = function (curso) {
    var mensaje = curso ?
        "Bienvenido al curso " + curso
        : "Suscribite al curso!";
    console.log('mensaje', mensaje);
};
mostrarContenido('TypeScript');
// Tipo: Never
var nunca;
var retornaError = function (error) {
    throw new Error('Error TypeScript.' + error);
    // Nunca retorna un valor!
};
// retornaError('Valor inesperado');
var cicloInfinito = function () {
    while (true) {
        // Nunca retorna un valor!
    }
};
// Tipo: Null y Undefined
// Undefined es la ausencia de un valor
var variableUndefined = undefined;
var variableUndefined2 = undefined;
var variableNull = null;
var variableNull2 = null;
var retornoNull = function () {
    return null;
};
var retornoUndefined = function () {
    return undefined;
};
/* Por lo general se utiliza undefined */
var variableSinValor;
// variableSinValor = ''; //Incorrecto
console.log('variableSinValor', variableSinValor);
