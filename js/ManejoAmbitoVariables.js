//Variable global
var nombre = null;

function mostrarNombre(parametro) {
	nombre = parametro.value;
	var saludo = "Hola " + nombre.toUpperCase();
	document.getElementById("resultado").innerHTML = saludo;
}

function saludarLocal(parametro) {
	var nombre = parametro;
	alert("hola " + nombre + " (local)");
	alert("Hola " + this.nombre + " (Global)");
}

function saludarGlobal() {
	alert("Hola " + nombre);
	window.location="http://tiendaonline.sw/";
}