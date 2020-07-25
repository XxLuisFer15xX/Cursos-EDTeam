"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MIEMBROS PRIVADO
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaDigintal = /** @class */ (function () {
    // Funcion que nos permite crear objetos
    function EscuelaDigintal(nombre) {
        this.nombre = nombre;
        // Atributos
        this.cursos = [];
        this.nombre = nombre;
    }
    EscuelaDigintal.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigintal;
}());
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
var escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);
