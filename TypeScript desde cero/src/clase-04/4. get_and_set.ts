export {};
// METODOS GET Y SET

class Curso{
	constructor(private _id: number, private _nombre: string){}

	// Metodos gether y sether
	get id(){
		return this._id;
	}

	set id(id: number){
		this._id = id;
	}

	get nombre(){
		return this._nombre;
	}

	set nombre(nombre: string){
		this._nombre = nombre;
	}
}

class EscuelaDigintal{
	// Atributos
	private _cursos: Curso[] = [];

	// Funcion que nos permite crear objetos
	constructor(private _nombre: string){}

	public agregarCurso(curso: Curso){
		this._cursos.push(curso);
	}

	// Metodos gether y sether
	get nombre(): string{
		return this._nombre;
	}

	set nombre(nombre: string){
		this._nombre = nombre
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
cursoJS.nombre = 'JavaScript desde Cero'; // Asignacio: SET
console.log('nombre cursoJS', cursoJS.nombre);

cursoJS.id = 20 // Asignacion SET
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
