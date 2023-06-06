// fetch(url, config)
const lista = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>Titulo: ${publicacion.title}</h2>
//         <p>Contenido: ${publicacion.body}</p>
//       `;

//       lista.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Coder",
//     body: "Nuestra primera publicación",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((usuario) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>ID: ${usuario.id}</h2>
//         <p>Nombre: ${usuario.nombre}</p>
//         <b>Edad: ${usuario.edad}</p>
//         <hr />
//       `;

//       lista.append(li);
//     });
//   });

const traerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h4>${publicacion.title}</h4>
        <p>${publicacion.body}</p>
    `;
      lista.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerDatos();
