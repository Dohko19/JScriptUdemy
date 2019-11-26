document.write("Programa para el manejo de tipo de datos:<br>");
//cadena
var cadena = "Hola desde JS";
document.write("valor de cadena " + cadena + "<br>");

var num1 = 15;
var num2 = parseInt("20");
var num3 = num1 + num2;

document.write("valor Num1: " + num1 + "<br>" + "Valor Num2: " + num2 + "<br>")
document.write("valor Num3: " + num3 + "<br>")

//boolean
var bandera = true;
var resultado = (num1 == num2);
document.write("valor Bandera: " + bandera + "<br>")
document.write("valor resultado: " + resultado + "<br>")
//null
var tipoNull = null;
document.write("valor tipoNull: " + tipoNull + "<br>")

//no definido
var undefinedvar;
document.write("valor undefinedvar: " + undefinedvar + "<br>");

//Conocer le tipo de dato

resultado = (typeof num1 == "number");
document.write("¿Es Numerico?: " + resultado + "<br>");

resultadoC = (typeof cadena == "string");
document.write("¿Es Cadena?: " + resultadoC);

resultadoB = (typeof bandera == "boolean");
document.write("<br>¿Es Bandera?: " + resultadoB);