"use strict";
// Funciones en TypeScript
// El signo "?" indica que un parametro va a ser opcional
var saludo3 = function (nombre) {
    if (nombre)
        return 'Hola ' + nombre;
    return '¡Hola!';
};
console.log(saludo3('Luis Fernando Solano Martínez'));
console.log(saludo3());
// Arreglos en TypeScript
var cursos2;
cursos2 = ['TypeScript', 'Angular'];
// Arreglos con Generics
var nombres;
nombres = ['Luis', 'Fernando'];
// Arreglo combinaciones de tipos
var arreglo = [2, 'cadena', true];
// Tuplas
// Una variable con multiplos estados
var infoCrusos = ['TypeScript', 100];
// infoCrusos = [200, 'Angular']; // Se debe respetar el orden
infoCrusos = ['Angular', 200];
var cursos3 = ['TypeScript', 150, '13/07/2020'];
console.log('curso', cursos3);
var nuevosInscritos = 10;
console.log('fecha de inicio', cursos3[2]);
console.log('fecha de inicio', cursos3[1] + nuevosInscritos);
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTest);
