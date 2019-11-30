document.write("Programa para contar el numero de digitos de un numero entero positivo: <br>");

var num = parseInt(prompt("Proporciona un numero entero positivo: ", 20));
document.write("El valor Proporcionado fue: "+ num + "<br>");
var contadorDigitos = 0;

while( num >= 1)
{
    num = num/10;
    //contadorDigitos = contadorDigitos + 1;
    contadorDigitos++;
}

document.write("El numero proporcionado contiene "+ contadorDigitos +  " digitos")