// <====={Condicionales}=====>
// <==={condiciones}===>
// Estructura de condiciones
if ( 3 === 5 ) {
	console.log("Primera Condicion")
} else if ( 10 === 5 ) {
	console.log("Segunda Condicion")
} else if ( 5 === 10 ) {
	console.log("Tercera Condicion")
} else {
	console.log("Cuarta Condicion")
}

// Condiciones anidadas
if ( 3 === 5 ) {
	console.log("Condicion 1.0")
} else {
	console.log("Condicion 2.0")
	if ( 5 === 5 ) {
		console.log("Condicion 2.1")
	} else {
		console.log("Condicion 2.2")
	}
}


/** Falsy
 * 0
 * ""
 * NaN
 * undefined
 * null
 * 
 ** Truthy
 * String no vacio
 * Número diferente de cero
 * arrays
 * objetos
 * 
 */







// <====={Ciclos}=====>