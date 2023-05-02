// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); // m => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(4));

// let mayorQueDiez = mayorQue(10); // m => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(8));

// const operaciones = (operacion) => {
//   if (operacion === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (operacion === "restar") {
//     return (x, y) => x - y;
//   }

//   if (operacion === "multiplicar") {
//     return (x, y) => x * y;
//   }

//   if (operacion === "dividir") {
//     return (x, y) => x / y;
//   }
// };

// const sumar = operaciones("sumar"); // (x, y) => x + y;
// console.log(sumar(5, 6));

// const dividir = operaciones("dividir");
// console.log(dividir(10, 2));

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([5, 6, 32, 65], console.log);

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// const duplicado = [];
// iterador([5, 6, 32, 65], (el) => {duplicado.push( el * 2 )});
// console.log(duplicado);

//forEach
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1300 },
//   { id: 2, nombre: "zapato", precio: 1400 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// productos.forEach(item => { // recorrer el arreglo
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find
// let nombre = prompt("Ingrese el nombre");
// const encontrado = productos.find(item => item.nombre.includes(nombre)); //encuentra el primer elem ento que cumple la condicion

// if(encontrado){
//   let mensaje = `
//     Id: ${encontrado.id}
//     Nombre: ${encontrado.nombre}
//     Precio: ${encontrado.precio}
//   `;

//   alert(mensaje);
// }else{
//   alert("Producto no encontrado");
// }

//filter
// let precio = parseInt(prompt("Ingrese el precio minimo de los productos"));
// const encontrados = productos.filter(item => item.precio > precio); //encuentra todos los lementos que cumplen la condicion

// encontrados.forEach(item => {
//   let mensaje = `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `;

//   alert(mensaje);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1300 },
//   { id: 2, nombre: "zapato", precio: 1400 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];
//some retorna true si al menos un leemento cumple la condicion de lo contrario retorna false
// console.log(productos.some(item => item.nombre === "asdf"));

//map transformar o modificar el arreglo
// const nombres = productos.map(item => item.nombre);
// console.log(nombres);
// const precios = productos.map(item => item.precio);
// console.log(precios);

// const preciosActualizados = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(preciosActualizados);

//reduce reducir el arreglo a un solo valor
// const numeros = [3, 5, 4, 6, 7, 8, 99];
// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1300 },
//   { id: 2, nombre: "zapato", precio: 1400 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];
// const total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort organiza el arreglo
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];
console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a es igual a b
    return 0;
  })
);
