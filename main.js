// Esto es un comentario

/* 
Comentario
de
varias
líneas
*/

var nombre = "Andrea"; // Variable
var nuevaVar;
var apellido = "Sanchez";
console.log(nombre + " " + apellido); // Impresión en consola

const planeta = "Tierra"; // Constante

nuevaVar = "Valor";

//String
var cadena = "Andrea";
cadena = 'And"rea';
cadena = 'Andrea "Andy" Sanchez';
cadena = "Andrea 'Andy' Sanchez";
cadena = 'Andrea "Andy" Sanchez';

console.log(cadena);
//Number
var numero = 15;
numero = Infinity;
numero = NaN; // Not a number
numero = 2.2e20; // notación cientifica [2.2 * (10^ 20)]
numero = 0.012;
numero = -0.012;
console.log(numero);
console.log(150);
console.log("150");
//Boolean
var activo = true; // Sólo puede recibir true o false
activo = false;
console.log(activo);

// Undefined
var indefinido; //Se refiere a variables sin valor por definir
console.log(indefinido);

// Null
var nulo = null; //Se refiere a una variable que no se le asigna valor
console.log(nulo);

// Operador % (Modulo) Retorna el residuo de una división
var modulo = 8 % 2; //Esto nos regresa un 0, porque el 8 es múltiplo de 2
modulo = 7 % 2; //Esto nos regresa un 1, porque el 7 entre 2 nos deja con un 3 entero y sobra 1

var dineroEnTarjeta = 0;
if (dineroEnTarjeta > 0) {
  console.log("Felicidades, tienes dinero!");
} else {
  console.log("Qué mal, no tienes dinero!");
}

function saluda(nombre, edad, ciudad) {
  console.log(
    "Hola " + nombre + " tu edad es de " + edad + " y vives en: " + ciudad
  );
}

saluda("Roberto", 24, "Ciudad Madero");
saluda("María", 46, "Ciudad De México");

var miEfectivoDisponible = 300;
var precioProducto = 200;

/* if (miEfectivoDisponible >= precioProducto) {
  console.log("Puedes comprar estre producto");
} else if (miEfectivoDisponible === 0) {
  console.log("No tienes efectivo, utiliza una tarjeta");
} else {
    console.log("No te alcanza para comprar estre producto");
} */

/* if (miEfectivoDisponible <= precioProducto || miEfectivoDisponible === 0) {
  console.log(
    "No te alcanza para comprar estre producto o no tienes efectivo. Utiliza una tarjeta"
  );
}

switch (miEfectivoDisponible) {
  case 100:
    console.log("Tienes 100 pesos");
    break;
  case 200:
    console.log("Tienes 200 pesos");
    break;
  case 300:
    console.log("Tienes 300 pesos");
    break;
  default:
    console.log("No coincide con ningun valor");
}
var j = 10;
for (var i = 50; i <= 100; i++, j++) {
  console.log("imprimir " + i, "imprimir " + j);
}

var contador = 10;
while (contador > 0) {
  console.log(contador);
  contador--;
}

var continuar = "S";
while (continuar.toLocaleLowerCase() === "s") {
  const operación = prompt("Selecciona el tipo de operación (-, +, *, /)");
  const num2 = prompt("Ingresa el segundo número.");
  const num1 = prompt("Ingresa el primer número.");
  var resultado;
  switch (operación) {
    case "-":
      resultado = Number(num1) - Number(num2);
      break;
    case "+":
      resultado = Number(num1) + Number(num2);
      break;
    case "*":
      resultado = Number(num1) * Number(num2);
      break;
    case "/":
      if (Number(num2) === 0) {
        resultado = "No es posible hacer una división entre 0.";
      }
      resultado = Number(num1) / Number(num2);
      break;
  }
  console.log("Tu resutaldo es: " + resultado);
  continuar = prompt("Desea continuar? s/n");
} */

function numerosPares(numero) {
  var cont = 0;
  var numPares = numero;
  for (var i = 1; cont < numPares; i++) {
    if (i % 2 === 0) {
      console.log(i);
      cont++;
    }
  }
}

// numerosPares(prompt('Cuantos números quieres tener?'));

// Arreglos
var calificaciones = [100, 50, 80, 40, 90, 100, 80, 10, 0];

/* var suma = 0;
for (var i = 0; i < calificaciones.length; i++) {
  suma = calificaciones[i] + suma;
}
console.log(suma); */
/*
! ForEach
var suma = 0;
calificaciones.forEach(function(calificacion, indice){
  suma = suma + calificacion
  console.log(calificacion, indice);
});
console.log(suma);
*/

/* 
! Map
var nuevoArregloCal = calificaciones.map(function(elementoActual, indice){
  if(indice === 1 || indice === 2 || indice === 3){
    return -1;
  }
  return elementoActual/10;
});
console.log(calificaciones)
console.log(nuevoArregloCal)
 */

/* 
! Filter
var calificacionesNoAprobatorias = calificaciones.filter(function (
  elementoActual,
  indice
) {
  // if(elementoActual >= 70){
  //   return true;
  // }else{
  //   return false;
  // }
  return elementoActual < 70;
});
console.log(calificaciones);
console.log(calificacionesNoAprobatorias);
 */
/* 
!Find
var calificacionCero = calificaciones.find(function (elementoActual, indice) {
  return elementoActual === 0;
});

console.log(calificaciones);
console.log(calificacionCero);
if (!calificacionCero && calificacionCero !== 0) {
  console.log("No se encontró");
}else{
  console.log('La calificación es: ', calificacionCero);
} */

/* 
!Reduce
var sumaCalificaciones = calificaciones.reduce(function (
  acumulador,
  elementoActual,
  indice
) {
  return acumulador + elementoActual;
},
0);

console.log(sumaCalificaciones);
 */