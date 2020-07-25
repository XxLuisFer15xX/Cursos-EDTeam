"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// METODOS GET Y SET
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        // Metodos gether y sether
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
var EscuelaDigintal = /** @class */ (function () {
    // Funcion que nos permite crear objetos
    function EscuelaDigintal(_nombre) {
        this._nombre = _nombre;
        // Atributos
        this._cursos = [];
    }
    EscuelaDigintal.prototype.agregarCurso = function (curso) {
        this._cursos.push(curso);
    };
    Object.defineProperty(EscuelaDigintal.prototype, "nombre", {
        // Metodos gether y sether
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EscuelaDigintal.prototype, "cursos", {
        get: function () {
            return this._cursos;
        },
        enumerable: false,
        configurable: true
    });
    return EscuelaDigintal;
}());
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
var escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);
// Acceder a los atributos publicos
cursoJS.nombre = 'JavaScript desde Cero'; // Asignacio: SET
console.log('nombre cursoJS', cursoJS.nombre);
cursoJS.id = 20; // Asignacion SET
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
