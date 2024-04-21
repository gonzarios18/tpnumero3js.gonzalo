/*Definir una función que muestre información
 sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa,
la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function mayusculaoMin(cadena){
if(cadena=== cadena.toUpperCase()){
    console.log("totalmente en mayusculas");

} else if(cadena=== cadena.toLowerCase()){

    console.log("totalmente en minusculas");
} else {

    console.log("mayusculas y minusculas");
}

}

let cadena= prompt("Ingrese una cadena de texto");
mayusculaoMin(cadena);