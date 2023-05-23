// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "juanita";
// console.log(nombre1);

// let objeto1 = { nombre: "juan", edad: 45 };
// let objeto2 = {...objeto1};

// objeto2.nombre = "mariana";
// console.log(objeto1);

// const nombres = ["juan", "mariana", "pepito"];
// console.log(nombres.join(" "));
// console.log(...nombres);

// const numeros = [3, 2, 4, 5, 7, 8, 9];
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const nombres1 = ["juan", "mariana", "pepito"];
// const nombres2 = ["pedro", "hernan"];
// const nombres = [...nombres1, ...nombres2];
// console.log(nombres);

// let objeto1 = { nombre: "juan", edad: 45 };
// let objeto2 = {
//   ...objeto1,
//   edad: 10,
//   curso: "javascript"
// };

// console.log(objeto2);

// function sumar(...numeros) {
//   return numeros.reduce((acum, item) => acum + item, 0);
// }

// console.log(sumar(3, 4, 5, 4, 6, 7, 9, 0, 7, 5, 34, 32));
// console.log(sumar(3, 4, 5));

/* 
if(condicion1){
  codigo cuando la condicion1 es verdadera
}else if(condicion2){
  codigo cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let usuario = prompt("Ingrese un usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese un usuario");
// }

// alert("Bienvenido");

// function sumar(x, y){
//   return x + y;
// }

// const sumar = (x, y) => x + y;

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", 45);

//filter
//forEach
//map
//find

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  console.log(inputs[0].value);
  console.log(inputs[1].value);
});
