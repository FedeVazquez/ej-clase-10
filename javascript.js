let nombre = 'Programación' + ' Fácil.';

let saludo = 'les doy la bienvenida a ';

let prescentacion = 'Mi nombre es Federico y '

let fraseCompleta = prescentacion + saludo + nombre;

console.log(fraseCompleta);

// frase completa------------------------------------



let frase = 'JavaScript ' + 'es un lenguaje ' + 'esencial para crear' + ' sitios web poderosos.';

console.log(frase);

// frase---------------------------------------------



let numeroString1 = '10';

let numeroString2 = '20';

let numeroString3 = '30';

let hola = ' hola ';

let concatenaNumeros = numeroString1 + hola + numeroString2 + hola + numeroString3;

console.log(concatenaNumeros);

//numeros con una separacion ---------------------------------



var genero = prompt('eres hombre o mujer?');

console.log (genero)

console.warn(genero)


var edad = prompt('cuantos años tienes?');

console.log(edad)

console.warn(edad)

if (genero == 'hombre'){
    if (edad >= 18){
      alert('Puedes entrar, eres mayor de edad.');
     } else {
      alert('No puedes entrar, eres menor de edad.');
     }
  }
  if (genero == 'mujer') {
    if (edad >= 20){
          alert('Puedes entrar, eres mayor de edad.');
         } else {
          alert('No puedes entrar, eres menor de edad.');
         }
  }