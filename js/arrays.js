/* 
Arreglos
se puede construir:
let nombreDelArray = [] si adentro de los corchetes no hay nada es un arreglo vacio
let nombreDelArray = [1 , "1" , "string" , true]
let nombreDelArray = new Array(1 , "1", "string", true)
*/
let arregloVacio = []
console.log(arregloVacio);

let series = ["Juego de tronos", 8, "Casa del dragon", 1, "Breaking bad", 5, true];
console.log(series);

let peliculas = new Array("El Padrino", "El exorcista")
console.log(peliculas);

//para saber la cantidad de elementos de un array se pone despues del array .length
document.write("La cantidad de elementos del array es " + series.length);

//para agregar un elemento al final del arreglo se utiliza .push(nombreElemento)
series.push('Los Soprano')
console.log(series);

//para acceder a un elemento del array se coloca el nombre del array 
//y seguido entre corchetes el indice del elemento
//ej: NombreDelArray[numeroDelIndice]
//El indice empieza desde 0

document.write("<br>El tercer elemento del arreglo series es: " + series[4])