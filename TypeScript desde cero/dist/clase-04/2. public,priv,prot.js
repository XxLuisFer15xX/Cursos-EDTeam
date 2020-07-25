"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscuelaDigintal = /** @class */ (function () {
    // Funcion que nos permite crear objetos
    function EscuelaDigintal(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    EscuelaDigintal.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigintal;
}());
var Curso = /** @class */ (function () {
    function Curso(id, curso) {
        this.id_curso = id;
        this.nombre = curso;
    }
    return Curso;
}());
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
var escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.cursos', escuela.cursos);
// Acceder a los atributos publicos
cursoJS.nombre = 'JavaScript desde Cero';
cursoJS.id_curso = 20;
