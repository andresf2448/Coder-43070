const usuarios = [
  { id: 1, nombre: "Angeles", edad: 20 },
  { id: 2, nombre: "Enzo", edad: 20 },
  { id: 3, nombre: "Andres", edad: 20 },
];

let container = document.getElementById("container");

const agregar = (id) => {
  let encontrado = usuarios.find((usuario) => usuario.id === id);
  console.log(encontrado);
};

usuarios.forEach((usuario) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${usuario.id}</h2>
    <p>Nombre: ${usuario.nombre}</p>
    <b>Edad: ${usuario.edad}</b>
    <button id="boton${usuario.id}">Agregar</button>
    <hr />
  `;

  container.append(div);

  let boton = document.getElementById(`boton${usuario.id}`);

  boton.addEventListener("click", () => agregar(usuario.id));
});
