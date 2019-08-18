document.write("Programa para el manejo de Operadores<br>");

//Operador de asignacion
var x = 5;
var y;
y = 6;
document.writeln("Este es el valor de X: " + x + "<br> Este es el valor de Y: " + y);
//Operador SUMA

var z = x + y;
document.writeln("<br>Este es el valor de Z: " + z);

//Operador ++ Incrementar en 1
x++;
document.writeln("<br>Este es el valor de X: " + x);

//valor de decremento

y--;
document.writeln("<br> Este es el valor de Y: " + y);

//Operador +=
// x = x + y
x += y;
document.writeln("<br>Este es el valor de X: " + x);
//concatenacion + (si hay alguno de los operandos es de tipo cadena)
var texto = "Global";
var text = "Mentoring";
document.writeln("<br>Valor de la concatenacion: "+ texto + " " + text + x);