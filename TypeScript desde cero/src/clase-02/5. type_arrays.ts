// Funciones en TypeScript
// El signo "?" indica que un parametro va a ser opcional
const saludo3 = (nombre?: string): string =>{
	if (nombre)
		return 'Hola ' + nombre
	return '¡Hola!'
}

console.log(saludo3('Luis Fernando Solano Martínez'));
console.log(saludo3());



// Arreglos en TypeScript
let cursos2: string[];
cursos2 = ['TypeScript', 'Angular'];

// Arreglos con Generics
let nombres: Array<string>;
nombres = ['Luis', 'Fernando'];

// Arreglo combinaciones de tipos
let arreglo: any = [2,'cadena',true];



// Tuplas
// Una variable con multiplos estados
let infoCrusos: [string, number] = ['TypeScript', 100];
// infoCrusos = [200, 'Angular']; // Se debe respetar el orden
infoCrusos = ['Angular', 200];

let cursos3: [string, number, string] = ['TypeScript', 150, '13/07/2020']
console.log('curso', cursos3);
let nuevosInscritos = 10;


console.log('fecha de inicio', cursos3[2]);
console.log('fecha de inicio', cursos3[1] + nuevosInscritos);

let tuplaTest: [string, string] = ['a','b'];
let tuplaTemp: [string, string] = ['c','d'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTest);


