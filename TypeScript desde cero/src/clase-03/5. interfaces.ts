export{};

// INTERFACES EN TYPESCRIPT

interface ICurso{
	nombre: string;
	identificador?: number; // Opcional
}

let cursoTypeScript: ICurso = {
	nombre: 'TypeScript',
	identificador: 1
}

cursoTypeScript = {
	nombre: 'JavaScript',
	identificador: 2
};
console.log('cursoTypeScript', cursoTypeScript);

let curso2: ICurso;
curso2 = {
	nombre: 'Angular'
}

console.log('curso2', curso2);



// EXTENDIENTO INTERFACES | HERENCIA DE INTERFACES
interface CursoEDteam extends ICurso{
	costo: number;
}

const primerCurso: CursoEDteam = {
	nombre: 'TypeScript desde Cero', // ICurso
	identificador: 200, // ICurso
	costo: 100 // CursoEDteam
}
console.log('primerCurso', primerCurso);