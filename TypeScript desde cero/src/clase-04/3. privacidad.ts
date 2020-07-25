export {};
// MIEMBROS PRIVADO

class Curso{
	constructor(private id: number, private nombre: string){
		this.id = id;
		this.nombre = nombre;
	}

}

class EscuelaDigintal{
	// Atributos
	private cursos: Curso[] = [];

	// Funcion que nos permite crear objetos
	constructor(private nombre: string){
		this.nombre = nombre;
	}

	public agregarCurso(curso: Curso){
		this.cursos.push(curso);
	}

}

const cursoJS = new Curso(1,'JavaScript');
const cursoTS = new Curso(2,'TypeScript');
const escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);
