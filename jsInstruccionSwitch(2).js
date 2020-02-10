function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


    switch (mesDelAño)
    {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert(" Falta Para el invierno");
            Break;

        case "Julio":
        case "Agosto":

            alert("Abrigate que hace frio");
            Break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor");
            Break;
    }




}//FIN DE LA FUNCIÓN