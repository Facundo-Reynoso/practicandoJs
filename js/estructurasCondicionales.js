/* Escribe un programa de una sola
linea que escriba en la pantalla el resultado de sumar 3 + 5. */

document.write( 3 + 5 + "<br>")

/* Escriba un programa de tres lineas que pida un numero, pida otro numero 
y escriba el resultado de sumar estos dos numeros. */

//Para pedir un dato al usuario usamos promt()
//el dato que obtenemos de promt() siempre es tomado como string
//para transformarlo en tipo number debemos colocar antes parseInt()
let num = parseInt(prompt("Ingrese primer numero"))
let num2 = parseInt(prompt("Ingrese segundo numero"))
document.write(num + num2)

/* Escriba un programa que pida dos numeros y escriba en la pantalla cual es el mayor. */

//Estructuras condicionales
/* 
if(condicion a cumplir. puede ser verdadera o falsa){
    codigo que se ejecutara si la condicion es verdadera
} else {
    codigo que se ejecutara si la condicion es falsa
}
*/
let numero = 8
let numero2 = 9

if (numero == numero2) {
    console.log("Son iguales");
} else {
    console.log("Son distintos");
}

let edadPablo = 35;
let edadMarcos = 35;

if(edadPablo > edadMarcos){
    document.write("<br>" + "Pablo es mayor")
} else if (edadMarcos > edadPablo) {
    document.write("<br>" + "Marcos es mayor")
} else {
    document.write("<br>" + "Tienen la misma edad")
}

let edadFacundo = 35;
let edadCarlos = 5;
let edadMaria = 15;

if (edadFacundo < edadCarlos && edadFacundo < edadMaria) {
    document.write("<br>" + "Facundo es el mayor")
} else if (edadCarlos < edadFacundo && edadCarlos < edadMaria){
    document.write("<br>" + "Carlos es el menor")
} else {
    document.write("<br>" + "Maria es la menor")
}

/* 
AND: condicion && condicion2 --- para que sea verdadero deben cumplirse ambas condiciones, otro caso es falas
OR: condicion || condicion2 --- para que sea falso deben ser falsas ambas condiciones, otro caso es verdadera 
*/