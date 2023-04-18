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

for(let numero = 1; numero <= 20; numero++){
  if(numero % 2 === 0){
    continue;
  }

  console.log(numero);
}