export {};
// ENUMERADOS EN TYPESCRIPT

// type Curso: string | number

enum Curso{
	JavaScript,
	TypeScript,
	Angular
}

let curso: Curso = Curso.Angular;
console.log('curso', curso);
console.log('curso', Curso[curso]);



// Otro ejemplo
enum DiaSemana {
	Lunes = 1,
	Martes,
	Miercoles,
	Jueves,
	Viernes,
}
console.log('Viernes', DiaSemana.Viernes);

enum FinSemana{
	Sabado = 6,
	Domingo
}
console.log('Sabado', FinSemana.Sabado);
console.log('Domingo', FinSemana.Domingo);

// Control sobre los valores para los Enumerados
enum Mes{
	Enero = 'Ene',
	Febrero = 'Feb',
	Marzo = 'Mar',
	Abril = 'Abr',
	Mayo = 'May'
}
console.log('Marzo', Mes.Marzo);