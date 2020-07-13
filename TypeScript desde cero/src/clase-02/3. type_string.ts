// String
let nombre = 'Luis';
let apellido: string = 'Aviles';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// String + ES6 Template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombreCompleto2', nombreCompleto2);
let arregloCursos = ['TypeScript', 'Angular'];
let mensaje = `
	Mi nombre es ${nombreCompleto} y tengo ${arregloCursos.length} cursos.
	¡Gracias por asistir!
`
console.log(mensaje);