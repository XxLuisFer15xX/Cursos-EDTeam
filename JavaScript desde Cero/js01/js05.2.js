/** Metodos .some() y .every()
 * .some(callback)
 * .every(callback)
*/
const imprimir = console.log

let teachers = ['Elvin', 'Luis','Oscar','Erick']
imprimir(teachers)
imprimir( teachers.some(el => el === 'Luis' ) )
imprimir( teachers.every(el => el.includes('a') ) )
imprimir( teachers.some(el => el.includes('a') ) )
imprimir( teachers.every(el => el.length >= 3 ) )


/** Metodos .map(), .filter() y .reduce()
 * .map(callback)       //Transforma todos los elementos del array
 * .filter(callback)    //Filtra los elementos que cumplan con la condicion
 * .reduce(callback)    //Reduce todos los elementos a un unico valor
*/
let numbers = [5,6,7,8,9]
imprimir(numbers)
//.map(elemento => <manipular cada elemento> )
imprimir(numbers.map( el => el * el ))

//.filter(elemento => <condicion> )
imprimir(numbers.filter( el => el > 5 ))

//.map( (contador,elemento) => <manipular cada elemento> )
imprimir(numbers.reduce( (a,b) => a + b ))
