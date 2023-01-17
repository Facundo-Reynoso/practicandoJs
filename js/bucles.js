// document.write('Elemento 1 <br>')
// document.write('Elemento 2 <br>')
// document.write('Elemento 3 <br>')
// document.write('Elemento 4 <br>')
// document.write('Elemento 5 <br>')
// document.write('Elemento 6 <br>')
// document.write('Elemento 7 <br>')
// document.write('Elemento 8 <br>')
// document.write('Elemento 9 <br>')
// document.write('Elemento 10 <br>')

// en lugar de hacer toda esta porcion de codigo para mostrar muchos elementos podemos usar un bucle
// que nos permita hacer lo mismo en menos lineas de codigo

/* 
Bucle while
estructura:
while(condicion){
    codigo a ejecutar x veces
    variable que cambia la condicion logica
}
*/
let contador = 1
while (contador <= 10) {
    document.write('Elemento' +  contador + "<br>")
    contador++ // el simbolo ++ suma 1
}

// Number() y un signo + antes de una variable string, transforman el tipo string en tipo number
let num = 22
let word = "22"
console.log(parseInt(word));
console.log(Number(word));
console.log(+word);

//para transformar una variable tipo number en tipo string se puede usar
// String() o tambien a la variable sumarle una cadena de texto vacia osea ""
console.log(String(num));
console.log(num + "");

/* 
Bucle do-while
estructura:
do{
    codigo a ejecutar
    variable que cambia la condicion logica
}while(condicion logica)
*/

let cont = 10;

do {
    document.write('Contador ' + cont + '<br>')
    cont--
} while (cont >= 1);
//para restar uno a una variable tipo number se le coloca despues el signo --

/* 
LENGTH
para saber la cantidad de caracteres que tiene un string se le coloca despues de la variable .length
*/
let despedida = "Chau, nos vemos."
console.log(despedida.length);

/* 
Indice en los caracteres de un string. 
el indice empieza a contar desde 0 el primer caracter. 
si tengo una variable string = "variable"
el indice 0 seria v, el 1 a, el 2 r, el 3 i, etc
*/

/* 
CHARAT
para sacar un caracter especifico de un string se usa nombreDeLaVariable.charAt(numero de indice del caracter que quiero extraer)
*/
let vocal = "sal"
console.log("la vocal de esta palabra es " + vocal.charAt(1));

/* 
Bucle for
Estructura:
for(crear variable; condicion logica; incremental o decremental;){
    codigo a ejecutar
}
*/

for(let i = 1; i <= 10; i++){
    document.write('Estructura for ' + i + "<br>")
}

let palabra = "tomate"

for (let l = 0; l < palabra.length; l++) {
    document.write('letra de la palabra ' + palabra.charAt(l) + '<br>')
}

