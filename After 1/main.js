// let numero1 = prompt("ingrese el primer numero entero");
// let numero2 = prompt("ingrese el segundo numero entero");
// let operacion = prompt(
//   "Elija que operacion desea realizar con su signo matematico"
// );
// let resultado;

// while (numero1 !== "" && numero2 !== "") {
//   switch (operacion) {
//     case "+":
//       resultado = parseInt(numero1) + parseInt(numero2);
//       alert(`El resultado de la suma es = ${resultado}`);
//       break;
//     case "*":
//       resultado = parseInt(numero1) * parseInt(numero2);
//       alert(`El resultado del producto es = ${resultado}`);
//       break;
//     case "%":
//       resultado = parseInt(numero1) % parseInt(numero2);
//       alert(`El resto de la division es = ${resultado}`);
//       break;
//     case "/":
//       resultado = parseInt(numero1) / parseInt(numero2);
//       alert(`El resultado de la division es = ${resultado}`);
//       break;
//     default:
//       alert("Ingrese un operador valido");
//       break;
//   }

//   numero1 = prompt("ingrese el primer numero entero");
//   numero2 = prompt("ingrese el segundo numero entero");
//   operacion = prompt(
//     "Elija que operacion desea realizar con su signo matematico"
//   );
// }

// let operacion = prompt("Ingrese la operacion");

// while (operacion !== "ESC") {
//   let numero1 = parseInt(prompt("ingrese el numero 1"));
//   let numero2 = parseInt(prompt("ingrese el numero 2"));

//   switch (operacion) {
//     case "+":
//       resultado = numero1 + numero2;
//       alert(`El resultado de la suma es = ${resultado}`);
//       break;
//     case "*":
//       resultado = numero1 * numero2;
//       alert(`El resultado del producto es = ${resultado}`);
//       break;
//     case "%":
//       resultado = numero1 % numero2;
//       alert(`El resto de la division es = ${resultado}`);
//       break;
//     case "/":
//       resultado = numero1 / numero2;
//       alert(`El resultado de la division es = ${resultado}`);
//       break;

//     case "par":
//       if(numero1 % 2 === 0){
//         alert("El numero es par");
//       }else{
//         alert("El numeor es impar");
//       }
//       break;

//     case "primo":
//       let contador = 0;

//       for(let i = 2; i < numero1; i++){
//         if(numero1 % i === 0){
//           contador += 1; //contador++  contador = contador + 1
//         }
//       }

//       if(contador > 0){
//         alert("El numero no es primo");
//       }else{
//         alert("El numero es primo");
//       }
//       break;

//     default:
//       alert("Ingrese un operador valido");
//       break;
//   }
//   operacion = prompt("Ingrese la operacion");
// }

let numero = 10;

let esPrimo = true;

if (numero === 1) {
  esPrimo = false
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

if (esPrimo) {
  console.log(`${numero} es un número primo`);
} else {
  console.log(`${numero} no es un número primo`);
}