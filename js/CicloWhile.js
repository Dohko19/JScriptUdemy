function generarNumeros() {
	var limite = 112;
	var i = 0;
	while (i <= limite) {
		if (i % 2 == 0) {
			document.getElementById('resultado').innerHTML += i + " ";
		}
		i++;
	}
}

function limpiar() {
	document.getElementById('resultado').innerHTML = "";
}