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

// Estructura switch
// No hace type coercion, compara el valor como tal
var option = 2;
switch (option){
	case 1:
		alert("Eres tímido")
		break
	case 2:
		alert("Eres extrovertido")
		break
	case 3:
		alert("Eres muy feliz")
		break
	default:
		alert("No ha seleccionado una opcion")
		break
}






// <====={Ciclos}=====>
// Ciclo For
// let variable local
// var variable global
// continue: omite condición
// break: sale del ciclo
for (let i = 0 ; i < 10; i++){
	console.log(i)
}
console.log("")

// Solo imprime los números impares
for (let i = 0 ; i < 10; i++){
	if (i%2 == 0) continue
	console.log(i)
}
console.log("")

// Imprime los numeros hasta el 6
for (let i = 0 ; i < 10; i++){
	if (i == 7) break
	console.log(i)
}
console.log("")


// Solo imprime los números impares
let n = 0
for (let i = 0 ; i < 10; i++){
	if (i%2 == 0) {
		n++
	}
}
console.log("Cantidad de numeros impares del 0 al 9: " + n)
console.log("")

let i = 0
while(i < 10){
	console.log(i)
	i++
}
console.log("")

i = 10
while(i--){
	console.log(i)
}


let password = 'EDteam'
do{
	var pass = prompt('Ingrese la contraseña')
} while(pass !== password)