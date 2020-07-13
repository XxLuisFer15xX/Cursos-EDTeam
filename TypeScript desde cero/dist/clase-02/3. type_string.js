"use strict";
// String
var nombre = 'Luis';
var apellido = 'Aviles';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
// String + ES6 Template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('nombreCompleto2', nombreCompleto2);
var arregloCursos = ['TypeScript', 'Angular'];
var mensaje = "\n\tMi nombre es " + nombreCompleto + " y tengo " + arregloCursos.length + " cursos.\n\t\u00A1Gracias por asistir!\n";
console.log(mensaje);
