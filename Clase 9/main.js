// console.log(document.body);

// getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

// getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const item of perritos){
//   console.log(item.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion a la que desea ir");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h2>Bienvenido a los favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenidos a nuestra página</h1>";
//   saludo.className = "verde";
// }

//CREACIÓN DE UN NODO
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); // creación de le etiqueta
// parrafo.innerHTML = "<h1>Hola muchachos</h1>"; // asignacion de contenido
// // document.body.append(parrafo);
// contenedor.append(parrafo);

// let contendor = document.getElementById("contenedor");
// contenedor.remove();

// let contendor = document.getElementById("contenedor");
// let nombres = ["juan", "pepito", "camila", "andres"];

// nombres.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = item;
//   contendor.append(div);
// });

let contendor = document.getElementById("contenedor");
const productos = [
  { id: 1, nombre: "camisa", precio: 1000, img: "asdf" },
  { id: 2, nombre: "gorra", precio: 700, img: "asdf" },
  { id: 3, nombre: "zapato", precio: 750, img: "asdf" },
  { id: 4, nombre: "media", precio: 1250, img: "asdf" },
];

let precio = parseInt(prompt("Ingrese el precio minimo"));
let encontrados = productos.filter(item => item.precio > precio);

encontrados.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>Precio: $${item.precio}</b>
    <img src=${item.img}/>
    <hr />
  `;

  contendor.append(div);
});
