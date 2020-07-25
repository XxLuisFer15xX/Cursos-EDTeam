export {};
// Aserciones de tipo en TypeScript | Type Assertions
let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;
console.log('numeroCruso', numeroCurso);


type Estudiante = {nombre: string, curso: string};
let estudiante = <Estudiante>{};
estudiante.nombre = 'Luis'
estudiante.curso = 'TypeScript';

let estudiante2 = `{"nombre": "Juan", "curso": "JavaScript"}`;
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante2);


console.log('estudiante', estudiante);
console.log('estudiante2', objetoEstudiante);