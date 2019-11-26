document.write("Programa para determinar si un numero es Par:<br>");
var num = parseInt(prompt("Propocione un numero", 2));

if(num >= 0)
{
    if(num%2 == 0)
    {
        document.write("Si es numero par");
    }
    else
    {
        document.write("No es numero Par");
    }
}
else
{
    document.write("Propociona un Valor entero mayor a 0 <br>");
   
}
document.write("<br>El valor proporcionado fue: "+ num);

