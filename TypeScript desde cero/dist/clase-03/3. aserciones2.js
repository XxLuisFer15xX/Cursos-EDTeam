"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aserciones de tipo en TypeScript | Type Assertions
var codigoCurso;
codigoCurso = 100;
var numeroCurso = codigoCurso;
console.log('numeroCruso', numeroCurso);
var estudiante = {};
estudiante.nombre = 'Luis';
estudiante.curso = 'TypeScript';
var estudiante2 = "{\"nombre\": \"Juan\", \"curso\": \"JavaScript\"}";
var objetoEstudiante = JSON.parse(estudiante2);
console.log('estudiante', estudiante);
console.log('estudiante2', objetoEstudiante);
