"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// HERENCIA DE CLASES EN TYPESCRIPT
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
var Escuela = /** @class */ (function () {
    function Escuela(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this._cursos = [];
    }
    Object.defineProperty(Escuela.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Escuela.prototype.agregarCurso = function (curso) {
        this._cursos.push(curso);
    };
    Object.defineProperty(Escuela.prototype, "cursos", {
        get: function () {
            return this._cursos;
        },
        enumerable: false,
        configurable: true
    });
    return Escuela;
}());
var EscuelaDigintal = /** @class */ (function (_super) {
    __extends(EscuelaDigintal, _super);
    function EscuelaDigintal(id, nombre, _paginaWeb) {
        var _this = _super.call(this, id, nombre) || this;
        _this._paginaWeb = _paginaWeb;
        return _this;
    }
    Object.defineProperty(EscuelaDigintal.prototype, "paginaWeb", {
        get: function () {
            return this._paginaWeb;
        },
        enumerable: false,
        configurable: true
    });
    return EscuelaDigintal;
}(Escuela));
var escuela = new EscuelaDigintal(1, 'EDteam', 'https://www.EDteam.com');
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela.id);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.paginaWeb', escuela.paginaWeb);
console.log('escuela.cursos', escuela.cursos);
var miEscuela = new Escuela(1, 'EDteam');
