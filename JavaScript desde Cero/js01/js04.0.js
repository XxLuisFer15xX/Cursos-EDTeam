/** <====={Funciones}=====>
 * ¿Qué es una función?
 * Es un trozo de código reutilizable en el eque hay un conjutno de instrucciones
 * 
 * Cómo funciona:
 * * Input => función => output
 * * Input => función => output1 => funcion => output2 => funcion => output3
 * input => argumentos
 * output => valor de retorno
 * // Las funciones sin valor de retorno devuelven undefined
 * 
 * Ejecutar una función
 * * nombreFuncion(argumento1, argumento2, argumento3 ,...)
 * * nombreFuncion()
 * 
 * Una función puede ser método de un objeto
 * * objeto.nomreFuncion(argumentos)
 * * * 'Hola mundo'.slice(3)
 * 
 * 
 * Si hay más argumentos que parámetros, los adicionales se ignoran
 * Si hay menos argumentos que parámetros
 * * los faltantes son undefined
 * * A menos que tengan un valor por defecto
 * 
 * 
 * parámetros rest (spreed operator) //Operador de expansión
 * funcion(...arguments)
 * // Permite mandar cualquier cantidad de argumentos a una función
*/


// Funcion en desuso
function saludar1(persona, sexo){    
    let saludo = sexo === 'm' 
        ? `Bienvenido`
        : `Bienvenida`
    return `${saludo} a EDteam, ${persona}`
}
console.log( saludar1 ('Luis', 'm') )




// Funcion estandar
const saludar2 = (persona, sexo) => {
    let saludo = sexo === 'm' 
        ? `Bienvenido`
        : `Bienvenida`
    return `${saludo} a EDteam, ${persona}`
}
console.log( saludar2 ('Silvia', 'f') )


// Mas corto
const sumar = (a,b) => a + b

// Mas largo
function sumar2(a, b) {
    return a + b
}



// Funcion con parametros por defecto
const saludar3 = (persona = 'visitante', sexo = 'm') => {
    let saludo = sexo === 'm' 
        ? `Bienvenido`
        : `Bienvenida`
    return `${saludo} a EDteam, ${persona}`
}
console.log( saludar3() )




//spread operator
//Muestra todos los parametros enviados a la función
const sumarTodos = (...numeros) => {
    console.log(numeros)
    console.log(numeros[4])
}
sumarTodos(1,2,3,4,5,6,7,8)


//Suma todos los parametros enviados a la función
const sumarTodos2 = (...numeros) => {
    let resultado = 0
    for(let i = 0; i < numeros.length; i++){
        resultado += numeros[i]
    }
    return resultado
}
console.log( sumarTodos2(1,2,35,4,5,6,7) )
console.log("")