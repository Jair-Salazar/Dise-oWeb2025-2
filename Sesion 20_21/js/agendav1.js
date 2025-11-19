//Funcion para cargar dom
document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const guardarButton = document.getElementById("guardarBtn");
    const recuperarButton = document.getElementById("recuperarBtn");
    const listaUL = document.getElementById("lista");

    //Funciones
    function guardarDatos() {
        localStorage.nombre = nombreInput.value;
        localStorage.telefono = telefonoInput.value;
    }


    //Recuperar datos
    function recuperarDatos() {
        if (localStorage.nombre != undefined && localStorage.telefono != undefined) {
            listaUL.innerHTML += "<li>" + localStorage.nombre + " - " + localStorage.telefono + "</li>";
        } else {
            listaUL.innerHTML = "<li> no hay datos guardados </li>"
        }
    }

    //Asignar los eventos a los botones
    guardarButton.addEventListener("click", guardarDatos);
    recuperarButton.addEventListener("click", recuperarDatos);
})