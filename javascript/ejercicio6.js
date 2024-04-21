/*Solicitar por pantalla al usuario ingresar
 el valor de los lados de un rectángulo, luego
 crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
*/
function calcularPerimetro(num1,num2,perimetro){

    perimetro= 2*(num1+num2);
    console.log("El perimetro es igual a:"+ perimetro);
}

let num1=Number(prompt("Ingrese el primer numero"));
let num2=Number(prompt("Ingrese el segundo numero"));
let perimetro;
calcularPerimetro(num1,num2,perimetro);