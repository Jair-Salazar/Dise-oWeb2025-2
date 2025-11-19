document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombre");
    const movil = document.getElementById("movil");
    const contactos = document.getElementById("contactos");

    const btnGuardar = document.getElementById("guardarbtn");
    const btnBuscar = document.getElementById("buscarbtn");
    const btnEliminar = document.getElementById("eliminarbtn");
    const btnEliminarTodos = document.getElementById("elitodosbtn");

    function actualizarLista() {
        contactos.innerHTML = "";

        if (localStorage.length === 0) {
            contactos.innerHTML = '<p class="vacio">No hay contactos guardados</p>';
            return;
        }

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);

            contactos.innerHTML += `
                <li>
                    <span><strong>${key}</strong></span>
                    <span>${value}</span>
                </li>
            `;
        }
    }

    btnGuardar.onclick = () => {
        if (nombre.value === "" || movil.value === "") {
            alert("Complete ambos campos");
            return;
        }

        localStorage.setItem(nombre.value.trim(), movil.value.trim());
        nombre.value = "";
        movil.value = "";
        actualizarLista();
    };

    btnBuscar.onclick = () => {
        let dato = localStorage.getItem(nombre.value.trim());
        if (dato) movil.value = dato;
        else alert("Contacto no encontrado");
    };

    btnEliminar.onclick = () => {
        if (localStorage.getItem(nombre.value.trim())) {
            localStorage.removeItem(nombre.value.trim());
            actualizarLista();
            alert("Contacto eliminado correctamente");
        } else {
            alert("Ese contacto no existe");
        }
    };

    btnEliminarTodos.onclick = () => {
        if (confirm("¿Desea eliminar todos los contactos?")) {
            localStorage.clear();
            actualizarLista();
        }
    };

    actualizarLista();
});
