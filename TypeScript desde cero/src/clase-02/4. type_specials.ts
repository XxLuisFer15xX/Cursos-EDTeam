// Tipos Especiales en TypeScript
// Tipo: Any
let desconocido; // Seria como: var desconocido;

desconocido = 'Hola';
desconocido = 2;


let desconocido2: any = 2;
desconocido2 = 'Hola';

// Tipo: Void
let vacio: void;
const mostrarContenido = (curso: string): void => {
	const mensaje = curso ?
		`Bienvenido al curso ${curso}`
		: `Suscribite al curso!`;
		console.log('mensaje', mensaje);
}
mostrarContenido('TypeScript');



// Tipo: Never
let nunca: never;
const retornaError = (error: string): never => {
	throw new Error('Error TypeScript.' + error);
	// Nunca retorna un valor!
}
// retornaError('Valor inesperado');

const cicloInfinito = (): never => {
	while(true){
		// Nunca retorna un valor!
	}
}


// Tipo: Null y Undefined
// Undefined es la ausencia de un valor
let variableUndefined = undefined;
let variableUndefined2: undefined = undefined;
let variableNull = null;
let variableNull2: null = null;

const retornoNull = (): null =>{
	return null;
}

const retornoUndefined = (): undefined =>{
	return undefined;
}

/* Por lo general se utiliza undefined */
let variableSinValor;
// variableSinValor = ''; //Incorrecto
console.log('variableSinValor', variableSinValor);
