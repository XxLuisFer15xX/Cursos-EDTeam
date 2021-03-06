export{};
// DECORADORES
function Entidad(config: any){
	console.log('Entidad', config);
	return function(target: any){
		// Dinamicamente: asignamos la propiedad clave a la clase
		target.clave = config.clave;
		console.log('target',target);
	}
}

function enumerable(value: boolean){
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
		descriptor.enumerable = value;
	}
}

function readonly(target: any, name: any, descriptor: PropertyDescriptor){
	descriptor.writable = false;
	return descriptor;
}

@Entidad({
	clave: 'CURSO'
})
class Curso{
	prueba: string;
	constructor(private _id: number, private _nombre: string){
		this.prueba = '';
	}

	// @decorador
	@enumerable(false) // no aparece como propiedad
	getPrueba(){
		return this.prueba;
	}

	@readonly
	lectura(){

	}

	get id(){
		return this._id
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

@Entidad({
	clave: 'ESCUELA_DIGITAL'
})
class EscuelaDigital{

}


function analizarClase(clase: any){
	console.log('Clave', clase.clave);
}

function mostrarPropiedades(clase: any){
	for(let prop in clase.prototype){
		console.log('prop',prop)
	}
}


let typescript = new Curso(1, 'TypeScript');
let escuela = new EscuelaDigital();
analizarClase(Curso); //Parametro: Una clase

// Sobreescritura de la funcion
typescript.lectura = function(){};
analizarClase(EscuelaDigital); //Parametro: Una clase
mostrarPropiedades(Curso);


