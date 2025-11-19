document.addEventListener("DOMContentLoaded", function(){
    const nombreImput = document.getElementById("nombre");
    const movilImput = document.getElementById("movil");
    const guardarbtnImput = document.getElementById("guardarbtn");
    const buscarbtnImput = document.getElementById("buscarbtn");
    const elminarbtnImput = document.getElementById("eliminarbtn");
    const elitodosImput = document.getElementById("elitodosbtn");
    const contactos = document.getElementById("contactos");

    function guardarDatos(){
        const nombre = nombreImput.value;
        const movil = movilImput.value;

        localStorage.setItem(nombre, movil);
        nombreImput.value = "";
        movilImput.value = "";
        actualizardatos();

    }
    function buscarDatos(){
        const nombre = nombreImput.value;
        const movilEncontrado = localStorage.getItem(nombre);
        if (movilEncontrado != null) {
            movilImput.value = movilEncontrado;
        } else {
            alert("Contacto no encontrado");
            movilImput.value = "";
        }
    }
    function eliminarDatos(){
        const nombre = nombreImput.value.trim();
        if (nombre === "") {
            alert("Por favor ingrese el nombre del contacato a eliminar")
            return;
        }
        localStorage.removeItem(nombre);
        nombreImput.value = "";
        movilImput.value = "";
        actualizardatos();
        alert("Contacto" + nombre + "Contacto eliminado");
    }
    function eliminarTodos(){
        if (confirm("Estas seguro de que desea eliminar toso los contactos")) {
            localStorage.clear();
            actualizardatos();
            alert("Todos loc contactos han sido eliminados")
        }
    }
    function actualizardatos() {
        let registro = "";
        if (localStorage.length === 0) {
            registro += '<li>Vacio</li>';
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                registro += '<li><span class ="nom">' + key + '</span>' +
                    '<span class ="nom">' + localStorage.getItem(key) + '</span></li><br>';
            }
        }
        contactos.innerHTML = registro;
    }
    guardarbtnImput.addEventListener("click", guardarDatos);
    buscarbtnImput.addEventListener("click",buscarDatos);
    elminarbtnImput.addEventListener("click",eliminarDatos);
    elitodosImput.addEventListener("click", eliminarTodos);
    actualizardatos();

})