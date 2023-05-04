// objeto Math
//Constantes
// console.log(Math.E); //Número Euler
// console.log(Math.PI); //Número PI

//Máximo y mínimo
// console.log(Math.max(4, 3, 55, 6, 7, 8, 88)); /// devuelve el valor máximo
// console.log(Math.min(5, 2, 55, 6, 7, 88)); //devuelve el valor mínimo
// console.log(Math.max(5, 44, 3, 4, 5, 66, Infinity, 67));
// console.log(Math.min(4, 1, 6, 5, 66, 0, -Infinity, 67));

//Redondeo
// console.log(Math.ceil(3.4)); // redondea hacia arriba
// console.log(Math.floor(4.8)); // redondea hacia abajo
// console.log(Math.round(3.1)); //redondea hacia el más cercano
// console.log(Math.round(3.9));
// console.log(Math.round(4.5)); //cuando está en la mitad redondea hacia arriba

// console.log(Math.sqrt(9)); //raíz cuadrada
// console.log(Math.sqrt(-1));

//Números aleatorios
// console.log(Math.random());//número aleatorio entre cero y uno
// console.log(Math.random() * 10); //número entre cero y diez
// console.log(Math.round(Math.random() * 12 + 8));

// const aleatorio = (numero) => {
//   return Math.round(Math.random() * numero);
// }

// let  numero = parseInt(prompt("Ingrese el número"));
// console.log(aleatorio(numero));

let nombres = ["mariana", "pepito", "juan", "carlos"];
let cantidad = parseInt(prompt("Ingrese la cantidad de aleatorios que desea"));

for(let i = 0; i < cantidad; i++){
  let indiceAleatorio = Math.round(Math.random() * (nombres.length - 1));

  alert(nombres[indiceAleatorio]);
}