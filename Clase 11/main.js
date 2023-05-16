// console.log(localStorage);

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", 1);
// localStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// sessionStorage.setItem("nombre", "andres");
// sessionStorage.setItem("numero", 1);
// sessionStorage.setItem("valor", "true");

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

//eliminar datos del storage
// localStorage.removeItem("nombre"); // para eliminar un dato en especifico
// localStorage.clear(); // eliminar todo el storage

// let arreglo = ["camila", "juan", "pedro"];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = { nombre: "juan", edad: 12 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardarStorage(item.id, JSON.stringify(item))
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   let nombre = prompt("Ingree su nombre");
//   usuario = nombre;
//   sessionStorage.setItem("usuario", nombre);
//   alert(`Bienvenid@ eres nuev@ ${nombre}`);
// }

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// let boton = document.getElementById("borrar");
// let carritoPagina = document.getElementById("carrito");
// let carrito = [];
// let carritoStorage = localStorage.getItem("carrito");

// if (carritoStorage) {
//   carrito = JSON.parse(carritoStorage);
// } else {
//   let div = document.createElement("div");
//   div.innerHTML = "Carrito Vacio";

//   document.body.append(div);
// }

// carrito.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//     <hr />
//   `;

//   carritoPagina.append(div);
// });

// boton.addEventListener("click", () => {
//   localStorage.clear();
//   location.reload();
//   alert("carrito eliminado");
// });
