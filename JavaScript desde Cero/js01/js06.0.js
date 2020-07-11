/** <====={Objetos}======>
 ** Objetos: Es una estructura de datos
 * * Propiedades
 * * Metodos
 * * Prototipos y cadena de prototipos
 * * Operadores
*/
const imprimir = console.log
let perro = {
    nombre: 'Ranyer',
    edad: 3,
    color: 'negro',
    sexo: 'macho',
    vacunas: true,
    correr(){
        console.log(`${this.nombre} corre`)
    }
}
imprimir(perro.nombre)
imprimir(perro.edad)
imprimir(perro.sexo)
perro.correr()
imprimir("")

let user = {
    nombre: 'Luis',
    'ape-llido': 'Solano'
}
imprimir(user.nombre)
//imprimir(user.ape-llido)      //Error
imprimir(user['ape-llido'])
imprimir("")


let a = 'hola', b = 'mundo'
let saludo = {
    [a + b]: 'Mi primer hola mundo'
}
imprimir(saludo)
imprimir(saludo.holamundo)
imprimir(saludo[a+b])
imprimir("")


let myObject = {
    a: a,
    b: b
}
imprimir(myObject)


let myObject2 = {a,b}
imprimir(myObject2)
imprimir("")


//Eliminar una propiedad
imprimir(delete perro.edad)
imprimir(perro.edad)

//Añadir una propiedad
imprimir(perro.edad = 3)
imprimir(perro.edad)
imprimir(perro['feliz'] = true)
imprimir(perro.feliz)
imprimir(perro['feliz'])