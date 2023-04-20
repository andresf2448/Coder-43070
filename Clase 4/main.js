/* 
estructura de una funcion

function nombreFuncion(){
  Codigo a ejecutar por la funcion
}
*/

// function saludar(){
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Hola ${nombre}`;
//   alert(mensaje);
// }

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

// function saludar(saludo, nombre){
//   let mensaje = `${saludo} ${nombre}`;
//   console.log(mensaje);
// }

// saludar("Hola", "andres");
// saludar("Bienvenida", "camila");

// function sumar(numero1, numero2){
//   let resultado = numero1 + numero2;
//   let mensaje = `El resultado de ${numero1} + ${numero2} = ${resultado}`;
//   console.log(mensaje);
// }

// sumar(4, 5);

// function suma(num1, num2){
//   return num1 + num2;
// }

// let resultado = suma(4, 5);
// console.log(resultado);

// function saludar(){
//   console.log("Hola");
//   return
//   console.log("Chao");
// }

// saludar();

// function calculadora(numero1, numero2, operacion) {
//   switch (operacion) {
//     case "+":
//       return numero1 + numero2;
//       break;

//     case "-":
//       return numero1 - numero2;
//       break;

//     case "*":
//       return numero1 * numero2;
//       break;

//     case "/":
//       return numero1 / numero2;
//       break;

//     default:
//       return "operacion no identificada";
//       break;
//   }
// }

// let numero1 = parseInt(prompt("Ingrese el numero 1"));
// let numero2 = parseInt(prompt("Ingrese el numero 2"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numero1, numero2, operacion);
// alert(resultado);

// let resultado = 0;

// function sumar(numero1, numero2){
//   resultado = numero1 + numero2;
// }

// sumar(6, 10);
// console.log(resultado);

// let nombre = "camila";

// function saludar(){
//   let nombre = "andres";
//   console.log(nombre);
// }

// console.log(nombre);

// saludar();

// console.log(nombre);

// function sumar(num1, num2){
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2){
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

// const suma = (a, b) => {
//   return a + b;
// };

// (x) => {
//   return x;
// };

// () => {
//   return "hola";
// };

// (x, y) => x - y;

// suma(3, 4);

// function suma(num1, num2){
//   console.log(num1 + num2);
// }

// const suma = (x, y) => x + y;
// const resta = (x, y) => {
//   asdf
//   asdf
//   asdf
//   return
// }

// let resultado = suma(4, 5);
// console.log(resultado);

// const calculadora = (numero1, numero2, operacion) => {
//   switch (operacion) {
//     case "+":
//       return numero1 + numero2;
//       break;

//     case "-":
//       return numero1 - numero2;
//       break;

//     case "*":
//       return numero1 * numero2;
//       break;

//     case "/":
//       return numero1 / numero2;
//       break;

//     default:
//       return "operacion no identificada";
//       break;
//   }
// }

// let numero1 = parseInt(prompt("Ingrese el numero 1"));
// let numero2 = parseInt(prompt("Ingrese el numero 2"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numero1, numero2, operacion);
// alert(resultado);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioproducto = 1000;
let descuento = 10;

let nuevoPrecio = resta(suma(precioproducto, iva(precioproducto)), descuento);
                // = resta(suma(1000, iva(1000)), 10);
                // = resta(suma(1000, 210), 10);
                // = resta(1210, 10);
                // = 1200;