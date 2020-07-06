//alert('Hola mundo');
let number = 6
//alert(number)
let EDTeam = 'algo'
let name = "Luis"
let name2 = `Luis Fernando tiene ${number} años`
console.log(name2)
let div = `
    <div class = "container">
        ${name2}
    </div> 
`
document.body.innerHTML = div

//undefined es un valor que existe en javascript la variable no tiene un valor
//null es cuando la variable no existe
//Symbol() son un tipo de datos

//array son tipos de datos que guardan varios valores
let numbers = [1,2,3,4,5,6,7,8,9]
//object son tipos de datos que guardan varios valores
let data = {
    nombre: "Luis",
    edad: 22
}

//El doble igual convierte los tipos de datos
console.log(99 == "99") //true
//El triple igual no convierte los tipos de datos
console.log(99 === "99") //false
console.log(typeof numbers) //Devuleve el tipo de dato como un string

