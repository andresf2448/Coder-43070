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

function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "*":
      return numero1 * numero2;
      break;

    case "/":
      return numero1 / numero2;
      break;

    default:
      return "operacion no identificada";
      break;
  }
}

let numero1 = parseInt(prompt("Ingrese el numero 1"));
let numero2 = parseInt(prompt("Ingrese el numero 2"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numero1, numero2, operacion);
alert(resultado);