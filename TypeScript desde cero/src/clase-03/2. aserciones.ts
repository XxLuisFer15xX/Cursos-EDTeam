export {}; // Modulo en TypeScript
// Alias para tipos de datos en TS
let curso: string = 'TypeScript';


type Curso = string | number | boolean

let cursoNuevo: Curso;
// cursoNuevo = true;
cursoNuevo = 'JavaScript'
cursoNuevo = true;

const getCurso = (): Curso => {
    return true;
}

// Arreglos
let cursos: string[] = ['JavaScript', 'TypeScript'];
let cursos2:  (Curso)[] = ['JavaScript', 'TypeScript', 0, false];
console.log('cursos',cursos);
console.log('cursos2',cursos2);
