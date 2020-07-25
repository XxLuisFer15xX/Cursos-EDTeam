"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Alias para tipos de datos en TS
var curso = 'TypeScript';
// Cursos codigo: JavaScript = 1, TypeScript = 2
// curso = 1; //JavaScript
// Variables que soportan dos tipos de datos
var cursoNuevo;
// cursoNuevo = true;
cursoNuevo = 'JavaScript';
cursoNuevo = 2; // TypeScript
var getCurso = function () {
    //return 'JavaScript';
    return 1;
};
// Arreglos
var cursos = ['JavaScript', 'TypeScript'];
var cursos2 = ['JavaScript', 'TypeScript', 0];
console.log('cursos', cursos);
console.log('cursos2', cursos2);
