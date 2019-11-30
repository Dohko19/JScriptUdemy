function manejoMatrices() {
	var dato = null;
	//arreglo individual
	var a1 = new Array();
	//renglon 0
	a1[0] = 'a';
	a1[1] = 'b';
	a1[2] = 'c';

	//renglon 2
	var a2 = new Array();
	a2[0] = 'e';
	a2[1] = 'f';
	a2[2] = 'g';

	var a3 = new Array();
	a3[0] = 'h';
	a3[1] = 'i';
	a3[2] = 'j';

	//Arreglo de arrelgos

	var a = new Array();
	a[0] = a1;
	a[1] = a2;
	a[2] = a3;

	//Recorrer la matriz
	for(i=0; i < a.length ; i++)
	{
		//Recorrer cada arreglo individual
		for(j=0; j < a[i].length; j++){
			//Imprimir resultados
			datos = a[i][j];
			imprimir(datos);
		}
		imprimir('<br>')
	}
}
function imprimir(valor) {
	document.getElementById('resultado').innerHTML += valor + " ";
}
function limpiar() {
	document.getElementById('resultado').innerHTML = "";
}