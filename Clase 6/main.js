/* 
estructura de un arreglo

[item0, item1, ..., itemn];
*/

// const arregloVacio = [];
// const numeros = [2, 3, 4, 5];
// const nombres = ["Enzo", "Angeles", "andres"];
// const valores = [true, false, false, true];
// const varios = [1, true, "Angeles"];

// console.log(nombres[1]);
// console.log(numeros[1] + numeros[3]);

// const nombres = ["Enzo", "Angeles", "andres", "camila", "maria"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// const nombres = ["Enzo", "Angeles"];
// nombres.push("Andres"); // agrega el elemento al final del arreglo
// console.log(nombres);

// nombres.unshift("Camila"); // agrega el elemento al principio del arreglo
// console.log(nombres);

// nombres.pop(); // retira un elemento del final del arreglo
// console.log(nombres);

// nombres.shift(); // retira un elemento del principio del arreglo
// console.log(nombres);

// const nombres = ["Enzo", "Angeles", "andres", "camila", "maria"];
// nombres.splice(2, 1); // para eliminar varios elementos
// console.log(nombres);

// console.log(nombres.join(", ")); // genera un string con los elementos unidos por el parametro pasado

// const nombres = ["Enzo", "Angeles", "andres", "camila", "maria"];
// const mascotas = ["Max", "Zeus"];
// const variados = nombres.concat(mascotas); //combinar dos arreglos en un solo arreglo

// console.log(variados);

// const nombres = ["Enzo", "Angeles", "andres", "camila", "maria"];
// const copia = nombres.slice(1, 4); //hace una copia de un fragmento del arreglo
// console.log(copia);

// const nombres = ["Enzo", "Angeles", "andres", "camila", "maria"];
// console.log(nombres.indexOf("Angeles")); //enceuntra la psoicion del elemento si existe si no retorna -1

// const productos = ["camisa", "gorra", "zapato", "medias"];

// let nombre = prompt("Ïngrese el nombre del producto");
// let posicion = productos.indexOf(nombre);

// if(posicion != -1){
//   alert(`El producto ${nombre} está en el puesto ${posicion}`);
// }else{
//   alert(`El producto no se encuentra en la bodega`);
// }

// const productos = ["camisa", "gorra", "zapato", "medias"];
// // console.log(productos.includes("gorra"));
// // console.log(productos.includes("gorraBonita")); // valida la existencia del elemento

// productos.reverse()// invierte el orden de los elementos del arreglo
// console.log(productos);

// const productos = ["camisa", "gorra", "zapato", "medias"];

// const eliminar = (nombre) => {
//   let index = productos.indexOf(nombre);

//   if(index != -1){
//     productos.splice(index, 1);

//     console.log(productos);
//   }
// };

// eliminar("gorra");

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 750 },
  { id: 3, nombre: "gorra", precio: 350 },
  { id: 4, nombre: "media", precio: 1500 },
];

for (const item of productos) {
  if (item.id < 3) {
    console.log(item.nombre);
    console.log(item.precio);
  }
}
