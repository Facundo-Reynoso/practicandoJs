//Mensaje de alerta
alert('Esto es un mensaje de alerta');

//Mostrar en consola
console.log("Hola mundo");

// ctrl + } = comentario de una sola linea

console.log('Despues del comentario');

console.log(`Texto de prueba: "Texto entre comilla"`);

/* alt + shift + a = comentario multiples lineas
bla
bla */

let anioActual = 2022; // notacion camelcase
let anio_pasado = 2021; // guion medio no se puede usar para nombrar una variable

//Definicion variable
let numero = 5; // el = se llama operador de asignacion
console.log(numero);
let numero2 = 6;
console.log(numero2);
numero2 = numero; //el = esta reasignando el valor de la variable numero2 por numero. Ahora numero2 tambien es igual a 5
console.log(numero2);

// let numero = 8; NO SE PUEDE NOMBRAR UNA NUEVA VARIABLE CON EL MISMO NOMBRE DE UNA YA DEFINIDA

//escribir en el documento html
document.write("Hola mundo<br>") // entre las comillas se puede poner etiquetas html.

//tipos de datos
//tipo string

let numberString = "8";
let numberString2 = "9"
document.write(numberString + numberString2) // El simbolo + entre los string no sirve como suma sino como concatenador

//Tipo Number

let num = 878;
let num2 = 10;
console.log(num + num2); //el simbolo + si sirve como suma en los tipos number

//tipo booleano

let verdadero = true;
let falso = false;
console.log(!verdadero); //el simbolo ! es el operador de negacion. !verdadero queda false

// constantes

const palabra = "Hola"
palabra = "chau"
console.log(palabra); //la variable const es inmutable. no se le puede asignar otro valor.

/* 
Operadores relacionales
== Igual a
!= Diferente de
=== estrictamente igual
!== estrictamente diferente
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
 */

/* 
Operadores logicos
&& and y
|| or o
 */




