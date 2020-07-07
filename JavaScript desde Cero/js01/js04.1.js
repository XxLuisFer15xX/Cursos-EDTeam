/**Las funciones son ciudadanos de primera clase
 * Pueden ser almacenadas en variables o constantes
 * * función por expresión
 * Puede ser pasadas como argumentos de otra función
 * * callbacks
 * Pueden ser retornadas por otra función
 * * closures
 * Pueden tener métodos o propiedades
 * * POO
 */

// <==={función por expresión}===>
const c = console.log
const multiplicar = (a,b) => a * b
c(multiplicar(3,4))


let edad = multiplicar(20,2)
let edad2 = multiplicar(multiplicar(5,4),2)
c(edad2)










// <==={callbacks}===>
function sumar(x){
    return function(y){
        return x + y
    }
}

c(sumar(5)) //Devuelve la funcion y
c(sumar(5)(2)) //Devuelve x + y
c("")

// callbacks con funcion estandar
const sumar2 = z => y => x + y
c(sumar(10))
c(sumar(10)(20))

//Ejercicio
const doSomething = z => y => z * y
const a = doSomething(2)(2)     // 4
const b = doSomething(3)        // y => 3 * y
c(doSomething(a)(b(3)))         // 4 * 9 = 36












/** Tipos de funciones
 * Funciones puras:
 * * No causa un efecto secundario, y siempre devuelve los mismos 
 * * valores para los mismos parámetros
 * 
 * Funciones autoinvocadas
 * Funciones nombradas y anonimas
*/
// funcion no pura
let frase = 'Hola'
const saludo1 = (persona) => {
    frase = frase + ' ' + persona
    return frase
}
c(saludo1 ('luis') )
c(frase)
c("")

// funcion pura
frase = 'Hola'
const saludo2 = (saludo, persona) => `${saludo} ${persona}`
c(saludo2 (frase, 'luis') )
c("")

//funcion autoinvocadas
const saludar = (
    (saludo, persona) => `${saludo} ${persona}` //Contenido de la funcion
)(frase,'luis') //Autoejecución de la función
c(saludar)
c("")

//Funciones nombradas


//Funciones anonimas
setTimeout(() => {
    alert('Hola EDteam')
}, 3000)













// <==={scope}===>
//Es el contexto en que una variable no esxiste
{
    let profesor = 'Luis'
}
//c(profesor) //profesor is not defined

{
    let profesor = 'Luis'
    c(profesor)
}










// <==={Closures}===>
const aumentar = () => {
    let numero = 0
    return () => {
        numero++
        c(numero)
    }
}

aumentar()()
aumentar()()
aumentar()()
aumentar()()
aumentar()()
c("")

const incrementar = aumentar()
console.log(incrementar)
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()




let edadPrueba = 10
let user = {
    nombre: 'Luis',
    edad: 54,
    getEdad(){
        c(this.edad)
    }
}

user.getEdad()
