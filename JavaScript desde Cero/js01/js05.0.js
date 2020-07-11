// <====={Manipulación con arrays}=====>

let cons = console.log

 let array = ['Hola', 2, true, undefined, [1,2,3,4],{}] 
 cons(array)
 cons(array[4])
 cons(array[5])
 cons(array[array.length - 1]) // Devuelve el ultimo objeto

 let array1 = ['Hola', 'amigos', 'de', 'EDteam']
 let string1 = array1[0]
 let string2 = array1[1]
 let string3 = array1[2]
 let string4 = array1[3]

// Desestructuración
// Definir un arreglo de varibales
 let [s1,s2,s3,s4] = array1 
 cons(s1)
 cons(s2)
 cons(s3)
 cons(s4)

// Poner y quitar valores en arrays 
let array2 = [1,2,3,4]
array2.push(5) //Agrega al final
cons(array2)
array2.pop() //Elimina al final
cons(array2)
array2.unshift('Nuevo') //Agrega al inicio
cons(array2)
array2.shift('Nuevo') //Elimina al inicio
cons(array2)
array2.splice(2, 0, '5', '6') //Agregar elementos
// array2.splice(<Donde comienza>, <Cuantos elimina>, [<Elementos que se agregaran>])
cons(array2)
array2.splice(2, 1) //Eliminar elementos
//array2.splice(<Donde comienza>, <Cuantos elimina>)
cons(array2)






// Ejercicio
// Invertir String
cons('Hola mama'.split('').reverse())
cons('Hola mama'.split('').reverse().join())

const reverseText = (string) => string.split('').reverse().join('')
cons(reverseText('EDteam'))

//Ordenar String
cons(['a','B','A','c','b'].sort()) 
cons(['a','B','A','c','b'].sort())
cons([10,100,1000,2,20,35,45,4000].sort()) //No ordena numeros solo string

cons([10,100,1000,2,20,35,45,4000].sort((a,b) => a - b)) //Ordenar numeros de menor a mayor







let numbers = [2,10,20,35,100,300,1000]
let numbers2 = [1,2,3,4,11,12,320,330,340]
cons(numbers.join (' '))
cons(numbers.concat(numbers2).join(' ')) //Juntar dos arrays

cons(numbers.indexOf(10)) //Devuelve el indice donde se encuentra el valor 10

cons(numbers.find(number => number > 100)) //Devuelve el primer numero mayor que 100
cons(numbers.findIndex(number => number > 100)) //Devuelve el indice del primer numero mayor que 100



