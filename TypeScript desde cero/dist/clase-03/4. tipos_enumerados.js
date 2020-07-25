"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ENUMERADOS EN TYPESCRIPT
// type Curso: string | number
var Curso;
(function (Curso) {
    Curso[Curso["JavaScript"] = 0] = "JavaScript";
    Curso[Curso["TypeScript"] = 1] = "TypeScript";
    Curso[Curso["Angular"] = 2] = "Angular";
})(Curso || (Curso = {}));
var curso = Curso.Angular;
console.log('curso', curso);
console.log('curso', Curso[curso]);
// Otro ejemplo
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 1] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 2] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 3] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 4] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 5] = "Viernes";
})(DiaSemana || (DiaSemana = {}));
console.log('Viernes', DiaSemana.Viernes);
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 6] = "Sabado";
    FinSemana[FinSemana["Domingo"] = 7] = "Domingo";
})(FinSemana || (FinSemana = {}));
console.log('Sabado', FinSemana.Sabado);
console.log('Domingo', FinSemana.Domingo);
// Control sobre los valores para los Enumerados
var Mes;
(function (Mes) {
    Mes["Enero"] = "Ene";
    Mes["Febrero"] = "Feb";
    Mes["Marzo"] = "Mar";
    Mes["Abril"] = "Abr";
    Mes["Mayo"] = "May";
})(Mes || (Mes = {}));
console.log('Marzo', Mes.Marzo);
