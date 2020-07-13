// Tipo de dato Number
// Manera incorrecta
let estudiantes = 100;

// Manera correcta
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

const getCantidadEstudiantes = (curso: String): number => {
	if (curso === 'TypeScript'){
		return 100;
	}else{
		return 0;
	}
}


let inscritosCursoTypescript: number = 100;

// Type: Number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);

// Type: Number, binario
let binario: number = 0b1001;
console.log('binario', binario);

// Type: Number, octal
let octal: number = 0o755;
console.log('octal', octal);

