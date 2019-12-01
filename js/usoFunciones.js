/*
* 5! = 5*4*3*2*1
*/

function usoFunciones(entrada) {
	var dato = entrada.value;
	if(dato >= 0 && dato <= 100)
	{
		var resultado = factorial(dato);
		limpiar();
		imprimir(resultado);
	}
	else
	{
		limpiar();
		imprimir('Solo se aceptan valores de 0 a 100')
	}
}

function factorial(n){
	if (n == 0 && n == 1) {
		return 1;
	}
	else
	{ //funciones recursivas
		return n * factorial (n - 1);
	}
}

function imprimir(valor) {
	var resultado = document.getElementById('resultado');
	resultado.innerHTML = "Resultado:" + valor + " ";
}

function limpiar() {
	document.getElementById('resultado').innerHTML = "";
}
