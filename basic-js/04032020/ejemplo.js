var nombre = 'Rolando';

//Traer primera letra de mi nombre , el cero es la primera letra
var primeraLetraNombre = nombre.charAt(0)
console.log(nombre);
console.log(primeraLetraNombre)

// Longitud de mi cadena de texto
console.log(nombre.length)

//Redondear
var corona = 200.45;
var totalCorona = 3 * corona;
var totalCoronaRedondeada = Math.round(totalCorona);

console.log(totalCorona);
console.log(totalCoronaRedondeada);

//Redondear decimales, dentro del Fixed pones la cantidad de decimales que quieres
var totalConDecimales = totalCoronaRedondeada.toFixed(2);
console.log(totalConDecimales);
