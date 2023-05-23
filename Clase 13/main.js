// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "juanita";
// console.log(nombre1);

// let objeto1 = { nombre: "juan", edad: 45 };
// let objeto2 = {...objeto1};

// objeto2.nombre = "mariana";
// console.log(objeto1);

// const nombres = ["juan", "mariana", "pepito"];
// console.log(nombres.join(" "));
// console.log(...nombres);

// const numeros = [3, 2, 4, 5, 7, 8, 9];
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const nombres1 = ["juan", "mariana", "pepito"];
// const nombres2 = ["pedro", "hernan"];
// const nombres = [...nombres1, ...nombres2];
// console.log(nombres);

// let objeto1 = { nombre: "juan", edad: 45 };
// let objeto2 = {
//   ...objeto1,
//   edad: 10,
//   curso: "javascript"
// };

// console.log(objeto2);

function sumar(...numeros) {
  return numeros.reduce((acum, item) => acum + item, 0);
}

console.log(sumar(3, 4, 5, 4, 6, 7, 9, 0, 7, 5, 34, 32));
