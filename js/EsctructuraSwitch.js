function determinarDia(entrada) {
    var fechaTexto = null;
    //Convertimos la entrada a un objeto tipo fecha
    var fecha = new Date( entrada.value );

    var dia = fecha.getDay();

    switch(dia){
        case 0:
            fechaTexto = "Es lunes";
            break;
        case 1:
            fechaTexto = "Es Martes";
            break;
        case 2:
            fechaTexto = "Es Miercoles";
            break;
        case 3:
            fechaTexto = "Es Jueves";
            break;
        case 4:
            fechaTexto = "Es Viernes";
            break;
        case 5:
            fechaTexto = "Es Sabado";
            break;
        case 6:
            fechaTexto = "Es Domingo";
            break;
        default:
            fechaTexto = "Valor erroneo de fecha";
    }

    document.getElementById('resultado').innerHTML = fechaTexto;
}
