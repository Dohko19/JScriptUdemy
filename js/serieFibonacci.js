function usoFibo(entrada) {
	limpiar();
	var a = 0;
	var b = 1;
	var c = null;
	var noMaximo = 100;
	var elementos = entrada.value;

	if(elementos > noMaximo)
	{
		imprimir('Prueba con menos de 100 elementos');
		return;
	}

	imprimir(a);
	imprimir(b);

	//Iteracion de cada uno de los elementos
	for(var i = 0; i < elementos - 2; i++){
		c = a + b;
		a = b;
		b = c;
		imprimir(c);
	}
}

function imprimir(valor) {
	var resultado = document.getElementById('resultado').innerHTML += valor + " ";
}

function limpiar() {
	document.getElementById('resultado').innerHTML = "";
}
