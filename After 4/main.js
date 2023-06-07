let container = document.getElementById("container");

//PRIMERA FORMA
// const getCharacters = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();
//   let characters = data.results;

//   characters.forEach((character) => {
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <h2>${character.name}</h2>
//       <img src="${character.image}" />
//       <p>${character.gender}</p>
//       <p>${character.status}</p>
//       <hr />
//     `;

//     container.append(div);
//   });
// };

// getCharacters();

//SEGUNDA FORMA

const getCharacters = async () => {
  const response = await axios("https://rickandmortyapi.com/api/character");
  const characters = response.data.results;

  let filtrados = characters.filter((item) => item.gender === "Male");
  filtrados.forEach((character) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" />
      <p>${character.gender}</p>
      <p>${character.status}</p>
      <hr />
    `;

    container.append(div);
  });
};

getCharacters();
