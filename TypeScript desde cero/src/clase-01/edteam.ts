let cursos = ['TypeScript desde cero', 'Angulas desde cero']
console.log('cursos',cursos)

const inscritos = 20;

const suma = (a: number, b:number) => a+b

console.log('2 + 4 = ' + suma(2,4))


// Template o literales
let codigo = `
	<button>Hola</button>
	<div></div>
`

console.log('codigo', codigo)

let curso = 'TypeScript'
let saludo2 = `Bienvenidos al curso de ${curso}`
console.log('Saludo:', saludo2)