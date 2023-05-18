// let numero = 2;
// numero = numero + 1;
// numero += 1;
// numero++;

//Operador ternario
/* 
estructura del operador ternario

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion es falsa
*/

// let edad = 20;

// if (edad >= 18) {
//   console.log("eres mayor de edad");
// } else {
//   console.log("No eres mayor de edad");
// }

// edad >= 18 ? ingresar() : console.log("No eres mayor de edad");

// const usuario = {
//   nombre: "juan",
//   edad: 14,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puede entrar a la fiesta");
// }

// const usuario = {
//   nombre: "juan",
//   edad: 14,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/*  
operador1 && operador2 retorna operador2 cuando operador1 representa algo true de lo contrario retorna operador1

operador1 || operador2 retorna operador1 si este es verdadero de lo contrario retorna operador2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("el carrito está vacio");

// const usuario = {
//   nombre: "andres",
//   edad: 20,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario = {
//   nombre: "juan",
//   edad: 14,
// };

// const usuario1 = null;

// // console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carrioStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carrioStorage) {
//   carrito = carrioStorage;
// } else {
//   carrito = [];
// }

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;
// const usuario1 = {
//   nombre: "andres"
// };

// console.log(usuario?.nombre || "El usuario no existe");
// console.log(usuario1?.nombre || "El usuario no existe");

const usuario = {
  nombre: "andres",
  edad: 22,
  cursos: {
    javascript: "aprobado",
  },
};

console.log(usuario?.cursos?.javascript || "La propiedad no existe");
console.log(usuario?.cursos?.react || "La propiedad no existe");
