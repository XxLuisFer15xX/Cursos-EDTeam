/**Eliminar array sin que tenga valores repetidos
 * new set (array)
*/

var numbers = [2,10,20,35,45,100,300,1000,10]
var numbers_no_reppet = new Set(numbers)

console.log(numbers)
console.log(numbers_no_reppet) //Elimina numeros repetidos pero lo convierte en un objeto
numbers = [...numbers_no_reppet] //Transforma un objeto en un array
console.log(numbers) 
console.log("")


const removeDuplicates = (var_array) => [...new Set(var_array)]
const imprimir = console.log
var numbers2 = [1,2,3,4,1,2,4,6,7,8,4,7,10]
imprimir(numbers2)
imprimir(removeDuplicates(numbers2))
numbers2 = removeDuplicates(numbers2)
imprimir("")
imprimir("Minimo y Maximo valor de un array")
//Incorrecto
imprimir(Math.min(numbers2))
imprimir(Math.max(numbers2))
// Las funciones min y max no reciben arrays, reciben lista de números

//Correcto
imprimir(Math.min(...numbers2))
imprimir(Math.max(...numbers2))
// Con el spread operator, pasamos una lista de numeros a las funciones min y max
imprimir("")





// Ciclos
imprimir("Recorrer arrays")
let arr = ['a','b','c','d','e','f']
for(let i= 0; i < arr.length; i++){
    imprimir(arr[i])
}
imprimir("")

for(let element of arr){
    imprimir(element)
}
imprimir("")

let teachers = ['Elvin', 'Luis','Oscar','Erick']
for(let teacher of teachers){
    imprimir(teacher)
}
imprimir("")

/** For Each
 * <array>.forEach(callback)
 * <array>.forEach(elemento,indice,array)
*/
teachers.forEach((elemento,indice) =>{
    imprimir(indice)
    imprimir(elemento)
})
imprimir("")
teachers.forEach((elemento,indice,arr) =>{
    imprimir(indice)
    imprimir(elemento)
    imprimir(arr)
})
imprimir("")

imprimir("El cuadrado de una lista de numeros")
// Ejemplo for each
let array1 = [5,6,7,8,9]
imprimir(array1)
array1.forEach((el,i) =>{
    array1[i] = el * el
})
imprimir(array1)



