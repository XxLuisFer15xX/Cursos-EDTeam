/* Tipos de Datos*/
//typeof number         number
//typeof Symbol()       Symbol
//typeof undefined      undefined
//typeof null           object
//typeof {}             object
//typeof []             object
//typeof function(){}   function
/*null es un object pero en realidad no deberia ser un object
, deberia ser un null. No lo han conrregido porque es un error
de las primeras verciones de JavaScript.
*/
let numbers = [1,2,3,4,5]
console.log(typeof numbers) //Devuleve el tipo de dato como un string

numbers = '1,2,3,4,5'
console.log(typeof numbers) //String


let frase = "Hola"
let user = "Luis"
console.log(frase + ' ' + user)
console.log(frase + 10)
console.log(frase * 10) //NaN no se puede convertir el valor a operar
console.log('2' * 10)
console.log('2a' * 10) //NaN
console.log(true + 'hola')
console.log(true + 1)
console.log(10 + '2')
console.log('2' + 10)
console.log('2' + 10 + true)
console.log(2 + 10 + true)
console.log(false == '')
console.log(false == 'true')

let number = 50
let numer2 = number
numer2 = 60

console.log(number)
console.log(numer2)

/** Parametros por valor y por referencia
 * Todos los tipos de datos primitivos se pasan por valor
 * Todos los tipos de datos de objetos se pasan por referencia
 */

 let numbers1 = [1,2,3,4]
 let numbers2 = numbers1
 numbers2.push(5)
 numbers1.push(6)
 console.log(numbers1)
 console.log(numbers2)
 
/** <==={Operadores en JavaScript}===>
  ** Operadores aritmeticos
  * +       Suma dos numeros
  * -       Resta dos numeros
  * *       Multiplica dos numeros
  * /       Divide dos numeros
  * %       Devuelve el residuo de la division entre dos numeros
  * 
  * 
  ** Operadores de asignación
  * =       Asigna un valor
  * +=      Asigna la suma de un valor
  * -=      Asigna la resta de un valor
  * *=      Asigna la multiplicacion de un valor
  * /=      Asigna la division de un valor
  * 
  * 
  ** Operadores de incrementación
  ** Pre-Incremento
  * ++i     Primero incrementa y despues se utiliza el valor
  * --i     Primero decrementa y despues se utiliza el valor
  * 
  ** Post-Incremtno
  * i++     Pirmero se utiliza el valor y despues incrementa
  * i--     Primero se utiliza el valor y despues decrementa
  * 
  * 
  ** Operadores de comparacion
  * ==      Compara si un dato es igual a otro y hace la conversion del tipo de dato
  * !=      Compara si un dato es diferente a otro y hace la conversion del tipo de dato
  * ===     Compara si un dato es igual a otro y no hace la conversion del tipo de dato
  * !===    Compara si un dato es diferente a otro y no hace la conversion del tipo de dato
  * <       Compara si un dato es menor que otro y hace la conversion del tipo de dato
  * >       Compara si un dato es mayor que otro y hace la conversion del tipo de dato
  * <=      Compara si un dato es menor o igual que otro y hace la conversion del tipo de dato
  * >=      Compara si un dato es mayor o igual que otro y hace la conversion del tipo de dato
  * 
  * 
  ** Operadores Logicos
  * ||      Operador logico "or"
  * &&      Operador logico "and"
  * 
  * 
  ** Operadores unarios
  * typeof  devuelve el tipo de dato de una variable
  * !       devuelve el valor negado de una variable
  * 
  * spread operator:
  * ...<variable>   //Separa el contenido de una variable por comas
  * , ya sea lista de objetos, letras o numeros    
  * 
  * 
  ** Operadores ternarios
  * <expresion> ? <valor true> : <valor false>
  * //let age = prompt('Dime tu edad')
  * //console.log(age >= 18 ? 'Eres mayor de edad' : 'Aun eres un nuño')
*/





// <====={Numeros}=====>
let numero = 5;
number.toFixed(2);
let number2 = 90281.121727172
number2.toFixed(3)

let texto = '20'
let textToNumber = parseInt(texto, 10)
textToNumber = parseFloat(texto)
texto = '20.12'
textToNumber = parseFloat(texto)
textToNumber = parseInt(texto)
console.log(textToNumber)


// <==={Math}===>
console.log(  Math.floor(10.7)  )
console.log(  Math.ceil(10.1)  )
console.log(  Math.round(10.1)  )
console.log(  Math.round(10.6)  )
console.log(  Math.random()  )
console.log(  Math.random() * 10  )
console.log(  Math.ceil( Math.random() * 10 )  )








// <====={Strings}=====>
//Literal es cuando se usa un valor y no una variable
console.log(  ''  )
console.log(  '<Strings>'  )
console.log(  'Luis'.length  ) //Cuenta el numero de letras que contiene la cadena
console.log(  '   Luis   '  )
console.log(  '   Luis   '.trim()  ) //Elimina espacios en blanco
console.log(  'Luis'.toLowerCase()  ) //Convierte a minusculas
console.log(  'Luis'.toUpperCase()  ) //Convierte a mayusculas
console.log(  'Luis'.indexOf('l')  ) //Indica en que posicion esta la letra
console.log(  'Luis'.indexOf('L')  )
console.log(  'Luis'.indexOf('u')  )
console.log(  'Luis Fernando'.indexOf('n',0)  ) //Se especifica que se empezara a contar desde el caracter 0
console.log(  'Luis Fernando'.indexOf('n',1)  ) //Devuelve la primera n
console.log(  'Luis Fernando'.indexOf('n',9)  ) //Devuelve la segunda n
console.log(  'Luis Fernando'.lastIndexOf('n')  ) //Devuelve la ultima n

console.log(  'http://ed.team/blog'.includes('blog')  ) //Devuelve true si contiene la cadena 'blog'
console.log(  'http://ed.team/blog'.startsWith('http://ed.team')  ) //Devuelve true si comienza con la cadena 'blog'
console.log(  'http://ed.team/blog'.endsWith('blog')  ) //Devuelve true si finaliza con la cadena 'blog'

console.log(  'Hola Mundo'.replace('Mundo', 'Luis')  )
console.log(  'Hola Luis Fernando Solano Martínez'.split(' ')  )
console.log(  'Hola Luis Fernando Solano Martínez'.split('')  )

console.log('')
console.log(  'Hola Mundo'.substring(4)  ) // Obtiene la cadena a partir del caracter 4
console.log(  'Hola Mundo'.substring(6, 2)  ) // Obtiene la cadena a partir del caracter 2 y termina hasta el 6 sin tomarlo en cuenta
console.log(  'Hola Mundo'.substring(2, 6)  ) // Obtiene la cadena a partir del caracter 2 y termina hasta el 6 sin tomarlo en cuenta
console.log('')
console.log(  'Hola Mundo'.substr(2, 6)  ) // Obtiene 6 caracteres a partir del caracter 2
console.log(  'Hola Mundo'.substr(-2)  ) // Obtiene los ultimos 2 caracteres
console.log(  'Hola Mundo'.substr(-1)  ) // Obtiene el ultimo caracter
console.log('')
console.log(  'Hola Mundo'.slice(2, 6)  ) // Obtiene la cadena a partir del caracter 2 y termina hasta el 6 sin tomarlo en cuenta
console.log(  'Hola Mundo'.slice(2, -1)  ) // Obtiene la cadena a partir del caracter 2 hasta el final menos el ultimo caracter
console.log(  'Hola Mundo'.slice(-5, -2)  ) // Obtiene los ultimos 5 caracteres menos los ultimos 2 caracteres




