// let nombre = "Juan";
// let edad = 45;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., calven: valorn}
*/

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// const persona1 = {
//   nombre: "pepita",
//   edad: 34,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona1.nombre);

// persona["nombre"] = "andres";
// persona.edad = 100;

// persona.telefono = 1234;
// persona["altura"] = 1.9;
// console.log(persona);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.trabaja = true;
// }

// let nombre = prompt("Ingrese su nombre");
// let edad = prompt("Ingrese su edad");
// let direccion = prompt("Ingrese la direccion");

// const persona1 = new Persona(nombre, edad, direccion);
// console.log(persona1);

// function Persona(info){
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// let info = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV"
// }

// const persona1 = new Persona(info);
// const persona2 = new Persona(info1);
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info){
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.hablar = function() {console.log(`Hola Soy ${this.nombre}`);}
// }

// const persona = new Persona({
//   edad: 45,
//   nombre: "Andres",
//   direccion: "AV"
// });

// console.log(persona);
// persona.hablar();

// function Persona(info){
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona = new Persona({
//   edad: 45,
//   nombre: "Andres",
//   direccion: "AV"
// });

// for(const item in persona){
//   console.log("item", item);
//   console.log("valor", persona[item]);
// }

// let persona = {
//   nombre: "romina",
//   edad: 25,
//   direccion: "AV",
// };

// console.log(persona.direccion);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 45, "AV");
// console.log(persona1.nombre);
// console.log(persona2.nombre);
// persona1.hablar();

// for(const item in persona2){
//   console.log(item);
// }

// class Producto{
//   constructor(nombre, precio, imagen){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("Monitor Gammer ...", 295319, "http:asd,lfkg");
// const producto2 = new Producto("Monitor Gammer ... F", 714695, "http:asd");

// console.log(producto1.vendido);
// producto1.vender();
// console.log(producto1.vendido);
// console.log(producto2);

class Producto{
  constructor(nombre, precio, imagen, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
    this.vendido = false;
  }

  vender(){
    this.cantidad = this.cantidad - 1;
  }
}

const producto1 = new Producto("Monitor Gammer ...", 295319, "http:asd,lfkg", 5);
const producto2 = new Producto("Monitor Gammer ... F", 714695, "http:asd", 5);

console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2);