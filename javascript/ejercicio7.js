/*Escriba un script que muestre la
tabla de multiplicar de un número
ingresado por pantalla, la creación
de la tabla debe ser realizada con
una función y mostrar solo los 
resultados del 1 al 10 del número
elegido por el usuario*/

function tablas(num){

    if(!isNaN(num)){

    for(let i=1; i<=10; i++){

        let resultado=num*i;

        console.log(`${num} x ${i} = ${resultado}`);
    }
}else {
    console.log("NO INGRESO UN NUMERO");
}
}

let num=Number(prompt("Ingrese un numero:"));
tablas(num);