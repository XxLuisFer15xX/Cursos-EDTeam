export{};
// HERENCIA DE CLASES EN TYPESCRIPT


class Curso{
	constructor(private readonly _id: number, private readonly _nombre: string){}

	get id(){
		return this._id;
	}

	get nombre(){
		return this._nombre;
	}
}

class Escuela{
	protected _cursos: Curso[] = [];

	constructor(
		protected _id: number,
		protected _nombre: string
	){}

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

	public agregarCurso(curso: Curso){
		this._cursos.push(curso);
	}

	get cursos(){
		return this._cursos;
	}
}





class EscuelaDigintal extends Escuela{

	constructor(
		id: number,
		nombre: string,
		private readonly _paginaWeb: string
	){
		super(id, nombre); // Reusar el constructor de la superclase
	}

	get paginaWeb(){
		return this._paginaWeb
	}

}

const escuela = new EscuelaDigintal(1, 'EDteam', 'https://www.EDteam.com');
const cursoJS = new Curso(1,'JavaScript');
const cursoTS = new Curso(2,'TypeScript');

escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);



console.log('escuela', escuela.id);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.paginaWeb', escuela.paginaWeb);
console.log('escuela.cursos', escuela.cursos);



const miEscuela = new Escuela(1, 'EDteam');