export {}; // Modulo en TypeScript
// Alias para tipos de datos en TS
let curso: string = 'TypeScript';

// Cursos codigo: JavaScript = 1, TypeScript = 2
// curso = 1; //JavaScript

// Variables que soportan dos tipos de datos
let cursoNuevo: string | number;
// cursoNuevo = true;
cursoNuevo = 'JavaScript'
cursoNuevo = 2; // TypeScript

const getCurso = (): string | number => {
    //return 'JavaScript';
    return 1;
}

// Arreglos
let cursos: string[] = ['JavaScript', 'TypeScript'];
let cursos2:  (string | number)[] = ['JavaScript', 'TypeScript', 0];
console.log('cursos',cursos);
console.log('cursos2',cursos2);
