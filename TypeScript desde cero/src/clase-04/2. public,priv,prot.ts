export {};

class EscuelaDigintal{
	// Atributos
	public nombre: string;
	public cursos: Curso[] = [];

	// Funcion que nos permite crear objetos
	constructor(nombre: string){
		this.nombre = nombre;
	}

	public agregarCurso(curso: Curso){
		this.cursos.push(curso);
	}
}

class Curso{
	public id_curso: number; // public
	public nombre: string; // public

	constructor(id: number, curso: string){
		this.id_curso = id;
		this.nombre = curso;
	}
}

const cursoJS = new Curso(1,'JavaScript');
const cursoTS = new Curso(2,'TypeScript');
const escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.cursos', escuela.cursos);


// Acceder a los atributos publicos
cursoJS.nombre = 'JavaScript desde Cero';
cursoJS.id_curso = 20;
