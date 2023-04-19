/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
// i++   i = i + 1

// for(let i = 0; i < 100; i++){
//   console.log(i);
// }

// let numero = parseInt(prompt("Ingrese el numero"));

// for(let i = 1; i <= 10; i++){
//   let resultado = numero * i;
//   alert(`${numero} * ${i} = ${resultado}`);
// }

// for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese su nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// console.log("proceso finalizado");

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     continue;
//   }

//   console.log(i);
// }

// for(let numero = 1; numero <= 20; numero++){
//   if(numero % 2 === 0){
//     continue;
//   }

//   console.log(numero);
// }

/* 
estructura del bucle while

while(condicion){
  codigo a ejecutar siempre que la condicion sea verdadera
}
*/

// let repetir = true;

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "pepito"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// let entrada = prompt("Ingrese un dato");

// while (entrada != "ESC") {
//   alert(`El usuario ingresó ${entrada}`);
//   entrada = prompt("Ingrese un dato");
// }

/* 
estructura del do while

do{
  codigo a ejecutar por lo menos una vez y siempre que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while(repetir){
//   console.log("entramos");
// }

// do{
//   console.log("Entramos");
// }while(repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que el valor sea valor1
    break;

  case valor2:
    codigo a ejecutar en caso de que el valor sea valor2
    break;
  .
  .
  .
  default:
    codigo a ejecutar cuando el valor no es igual a ninguno de los valores anteriores
    break;
}
*/

// let moneda = "usd";

// switch(moneda){
//   case "cop":
//     console.log("moneda de colombia");
//     break;

//   case "ars":
//     console.log("moneda de argentina");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Moneda desconocida");
//     break;
// }

let entrada = prompt("Ingrese un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola ANA " + i);
      break;

    case "JUAN":
      alert("Hola JUAN");
      break;

    default:
      alert("Quién eres?");
      break;
  }

  entrada = prompt("Ingrese un nombre");
}

