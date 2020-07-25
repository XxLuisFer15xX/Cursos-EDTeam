export {};
// METODOS GET Y SET
// ATRIBUTOS DE SOLO LECTURA: readonly

class Curso{
	constructor(private readonly _id: number, private readonly _nombre: string){}

	// Metodos gether y sether
	get id(){
		return this._id;
	}

	get nombre(){
		return this._nombre;
	}
}

class EscuelaDigintal{
	// Atributos
	private _cursos: Curso[] = [];

	// Funcion que nos permite crear objetos
	constructor(private readonly _nombre: string){}

	public agregarCurso(curso: Curso){
		this._cursos.push(curso);
	}

	// Metodos gether y sether
	get nombre(): string{
		return this._nombre;
	}



	get cursos(): Curso[]{
		return this._cursos;
	}

}

const cursoJS = new Curso(1,'JavaScript');
const cursoTS = new Curso(2,'TypeScript');
const escuela = new EscuelaDigintal('EDteam');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);

// Acceder a los atributos publicos
console.log('nombre cursoJS', cursoJS.nombre);

console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
