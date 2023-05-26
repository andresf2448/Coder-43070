//STORAGE
/* 
localStorage
guarda información cuando:
1. recarga de pagina
2. cierra de pagina
3. apagado del computador
4. reiniciado del computador

sessionStorage
guarda información cuando:

1. recarga de pagina

para ambos
setItem(clave, valor) // guarda en el storage un valor identificado con su clave
getItem(clave) // trae un valor por su clave
removeItem(clave) //elimina un valor por su clave
clear() // elimina todo el storage

let objeto = {};
localStorage.setItem("objeto", JSON.stringify(objeto));

let objetoRecuperado = JSON.parse(localStorage.getItem("objeto"))

*/

// let usuarios = [{ id: 1, nombre: "juan", edad: 29 }];

// localStorage.setItem("usuarios", JSON.stringify(usuarios));

const crear = (nombre, edad) => {
  let usuariosStorage = localStorage.getItem("usuarios");
  let usuarios = JSON.parse(usuariosStorage);

  let usuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    edad: edad,
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
};

let mostrar = document.getElementById("mostrar");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  console.log(inputs);
  // crear(inputs[0].value, inputs[1].value);
});

const borrarUsuario = (id) => {
  let usuariosStorage = localStorage.getItem("usuarios");
  let usuarios = JSON.parse(usuariosStorage);

  let nuevosUsuarios = usuarios.filter((usuario) => usuario.id != id);
  localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

  location.reload();
};

mostrar.addEventListener("click", () => {
  let usuariosStorage = localStorage.getItem("usuarios");
  let usuarios = JSON.parse(usuariosStorage);

  usuarios.forEach((usuario) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${usuario.id}</h2>
    <p>Nombre: ${usuario.nombre}</p>
    <b>Edad: ${usuario.edad}</b>
    <button id="boton${usuario.id}">Eliminar</button>
    </hr >
    `;

    document.body.append(div);

    let botonBorrar = document.getElementById(`boton${usuario.id}`);
    botonBorrar.addEventListener("click", () => borrarUsuario(usuario.id));
  });
});
