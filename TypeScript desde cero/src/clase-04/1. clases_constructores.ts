export {};

class EscuelaDigintal{
	// Atributos
	nombre: string;
	cursos: string[] = [];

	// Funcion que nos permite crear objetos
	constructor(nombre: string){
		this.nombre = nombre;
	}

	agregarCurso(curso: string){
		this.cursos.push(curso);
	}

}

const escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso('JavaScript');
escuela.agregarCurso('TypeScript');

console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);