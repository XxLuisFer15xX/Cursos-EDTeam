export {};

import { Curso } from './modelo/curso';
import { EscuelaDigital } from './modelo/escuela-digital';
import { analizarClase, mostrarPropiedades, PI } from './util/index';

let typescript = new Curso(1, 'TypeScript');
let escuela = new EscuelaDigital();
analizarClase(Curso); //Parametro: Una clase

// Sobreescritura de la funcion
//typescript.lectura = function(){};
analizarClase(EscuelaDigital); //Parametro: Una clase
mostrarPropiedades(Curso);
console.log('Valor de PI:', PI);

