"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.mostrarPropiedades = exports.analizarClase = void 0;
function analizarClase(clase) {
    console.log('Clave', clase.clave);
}
exports.analizarClase = analizarClase;
function mostrarPropiedades(clase) {
    for (var prop in clase.prototype) {
        console.log('prop', prop);
    }
}
exports.mostrarPropiedades = mostrarPropiedades;
var PI = 3.14;
exports.PI = PI;
