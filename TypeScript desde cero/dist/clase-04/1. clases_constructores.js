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
var escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso('JavaScript');
escuela.agregarCurso('TypeScript');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
