function manejoArreglos() {
	var lengua = null;
	var lenguas = new Array();
	lenguas[0] = "Chino Mandarin";
	lenguas[1] = "Español";
	lenguas[2] = "Ingles";
	lenguas[3] = "Hindi";
	lenguas[4] = "Portuges";
	lenguas[5] = "Ruso";
	lenguas[6] = "Frances";
	lenguas[7] = "Italiano";

	//
	for (var i = 0; i < lenguas.length; i++) {
		lengua = lenguas[i];
		//Imprimir
		imprimir(lengua);
	}
}

function imprimir(valor) {
	document.getElementById('resultado').innerHTML += valor + " ";
}
function limpiar() {
	document.getElementById('resultado').innerHTML = "";
}