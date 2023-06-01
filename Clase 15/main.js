// setTimeout(funcion, timer);

// setTimeout(() => {
//   console.log("hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 3000);

// console.log("final");

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color")
//   }, 5000)
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 2000);
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 0);

// console.log("final");

// function multiply (x, y) {
//   return x * y;
// }

// function printSquare (x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 0);

// console.log("final");

//setInterval(funcion, timer);

// setInterval(() => {
//   console.log("Hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//PROMESAS
// new Promise((resolve, reject) => {
//   //cuerpo de la promesa
// })

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     // if (value) {
//     //   resolve(["andres", "camila", "sofia"]);
//     // } else {
//     //   reject("Promesa rechazada");
//     // }

//     value
//       ? resolve(["andres", "camila", "sofia"])
//       : reject("Promesa rechazada");
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("proceso terminado"));

////////////////////////////////////////////////////////////
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "media", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

const traerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
    }, 3000);
  });
};
////////////////////////////////////////////////////////////

traerDatos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
        <hr />
      `;

      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));
