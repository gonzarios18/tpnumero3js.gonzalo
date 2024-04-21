/*Crear un array llamado meses y que almacene el nombre de los doce 
meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output:

*/

let meses = 
 [ "Enero",
  "Febrero",
  "Marzo",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",]
;

document.write("<ul>");
document.write("Lista de meses");
for(i=0;i<meses.length;i++){


document.write("<li>"+ meses[i]);

}
