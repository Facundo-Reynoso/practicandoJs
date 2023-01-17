/* 
En los casos en los que tengamos que hacer muchos if-else, podemos hacer en su lugar in switch.
Tambien cuando tenemos muchas condiciones a evaluar. ?)
*/

/* 
Estructura:
switch(condicion){
    case '1':
        codigo a ejecutar
    break
    case '2':
        codigo a ejecutar
    break
    case "otros":
        codigo a ejecutar
    break
    default
        opcion por defecto            
}
*/

let estaciones = prompt(
    'Ingrese el numero correspondiente a su estacion favorita: 1.verano 2.otoño 3.invierno 4.primavera'
);
/* 
cada caso tiene case sensitive, esto quiere decir que distingue mayusculas de minusculas, 
si el usuario pusiera Invierno o INVIERNO en lugar de invierno, el codigo no se ejecutaria.
Para corregir el case sensitive podemos añadir a la variable .toLowerCase() o .toUpperCase()
.toLowerCase() transforma todas las letras del string en minusculas.
.toUpperCase() transforma todas las letras del string en mayusculas.
*/
switch(estaciones.toLowerCase()){
    case '1':
            document.write('Usted eligio verano')
        break;
    case '2':
            document.write("Usted eligio otoño")
        break; 
    case '3':
        //Se puede poner mas de un caso que ejecute el mismo codigo
    case 'invierno':    
            document.write("Usted eligio invierno")
        break;
    case '4':
            document.write("Usted eligio primavera")
        break;
    default:
            alert("Usted eligio una opcion invalida")                           
}
