/*Crear un script que solicite al usuario mediante un prompt el nombre 
de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona
 cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’,
     ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, 
     ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, 
     ‘Sídney, Australia’, ‘El Cairo, Egipto’]
*/

let ciudades=[];

let ciudadesIngresadas="";
//let ultimoIngreso= ciudades[ciudades.length -1];
do{
    ciudadesIngresadas=prompt("Ingrese ciudades:");
    
    if(ciudadesIngresadas!==null){
ciudades.push(ciudadesIngresadas);

    }

}while(ciudadesIngresadas!==null)

for( let i=0; i<ciudades.length; i++){

    document.write("<li>"+ ciudades[i]+"</li>");
    
}




ciudades.push("Paris");
ciudades.splice(1,1,"Barcelona")
document.write("<ul>")



document.write("</ul>");
document.write("La longitud del arreglo es: "+ ciudades.length);
document.write("<br>")
document.write("<br> Primera posicion: "+ ciudades[0])
document.write("<br> Tercera posicion: "+ ciudades[2])
document.write("<br> La ultima posicion es: "+ ciudades[ciudades.length -1])








