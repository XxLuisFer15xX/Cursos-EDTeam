"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readonly = exports.enumerable = exports.Entidad = void 0;
function Entidad(config) {
    console.log('Entidad', config);
    return function (target) {
        // Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('target', target);
    };
}
exports.Entidad = Entidad;
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
exports.readonly = readonly;
