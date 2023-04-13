/* 
estructura del condicional if

if(condicion o valor){
  codigo a ejecutar cuando la condicion es verdadera
}
*/

/* 
= asingnacion
== comparacion de solo el valor
=== comparcion de valor y de tipo
*/

// if(false){
//   console.log("Entramos");
// }

// let nombre = "andres";

// if(nombre === "pepito"){
//   console.log("Hola pepito");
// }

// if(-1){
//   console.log("hola");
// }

/* 
estructura del condicional if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion no es verdadera
}
*/

// let respuesta = prompt("Terminaste la tarea");

// if(respuesta.toLowerCase() === "si"){
//   alert("Puedes salir a jugar");
// }else{
//   alert("No puedes salir a jugar");
// }

// let nombre = prompt("Ingrese el nombre del usuario");

// if(nombre === ""){
//   alert("Usuario vacio");
// }else{
//   alert(`Nombre ingresado ${nombre}`);
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores es veradera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if(edad < 14){
//   alert("No puedes entrar a la fiesta");
// }else if(edad < 18){
//   alert("Puedes entrar con un adulto");
// }else{
//   alert("Puedes entrar a la fiesta");
// }

/* 
condicion1 && condicion2 es verdadero cuando ambas condiciones son verdaderas
condicion1 || condicion2 es verdadero cuando al menos una de las condiciones es verdadera
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if(nombre != "" && apellido != ""){
//   alert(`Nombre: ${nombre} Apellido: ${apellido}`);
// }else{
//   alert("ingresar nombre y apellido");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != "" && (nombre === "ANDRES" || nombre === "andres")){
//   alert("Hola andres");
// }else{
//   alert("Nombre desconocido");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != "" && nombre.toLowerCase() === "andres" ){
//   alert("Hola andres");
// }else{
//   alert("Nombre desconocido");
// }

// let nombre = prompt("Ingrese el nombre");

// if(nombre != ""){
//   alert(`Hola ${nombre}`);
// }else{
//   alert("Nombre desconocido");
// }