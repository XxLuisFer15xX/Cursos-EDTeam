"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./modelo/curso");
var escuela_digital_1 = require("./modelo/escuela-digital");
var index_1 = require("./util/index");
var typescript = new curso_1.Curso(1, 'TypeScript');
var escuela = new escuela_digital_1.EscuelaDigital();
index_1.analizarClase(curso_1.Curso); //Parametro: Una clase
// Sobreescritura de la funcion
//typescript.lectura = function(){};
index_1.analizarClase(escuela_digital_1.EscuelaDigital); //Parametro: Una clase
index_1.mostrarPropiedades(curso_1.Curso);
console.log('Valor de PI:', index_1.PI);
