// Tipos Primitivos o Tipos Básicos
// Boolean
let estaConectado = true;
let estaInscrito: boolean; //Denotación pos fija, porque primero se define el nombre de la variable
estaInscrito = false;
estaInscrito = true;
// estaInscrito = 2; //No es valido


// Defenir el tipo de retorno de una función
// Función en desuso
function tieneDescuento1 (curso:String): boolean{
	if (curso === 'TypeScript'){
		return true;
	}else{
		return false;
	}
}

// Función estandar
const tieneDescuento2 = (curso: String): boolean => {
	if (curso === 'TypeScript'){
		return true;
	}else{
		return false;
	}
}

console.log(`tieneDescuento1('Angular'):`, tieneDescuento1('angular'));
console.log(`tieneDescuento2('Angular'):`, tieneDescuento2('angular'));
console.log(`tieneDescuento1('TypeScript'):`, tieneDescuento1('TypeScript'));
console.log(`tieneDescuento2('TypeScript'):`, tieneDescuento2('TypeScript'));

