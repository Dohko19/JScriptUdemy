function clasificacionEdades( entrada ){
	var resultado = null;
	var edad = entrada.value;
	if (edad > 0 && edad < 12) {
		resultado = "AA y A ";
	}
	else if (edad >= 12 && edad < 15)
	{
		resultado = "AA, A y B"
	}
	else if (edad >= 15 && edad < 18)
	{
		resultado = "AA, B15, A";
	}
	else if (edad > 18 && edad < 21)
	{
		resultado = "AA, B15, A, C";
	}
	else if (edad >= 21)
	{
		resultado = "Puede ver cualquier Clasificacion de Peliculas";
	}
	else
	{
		resultado = "valor Erroneo";
	}

	document.getElementById('resultado').innerHTML = resultado;
}