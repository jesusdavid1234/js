function agregarTarea() {
    const tareaNombre = document.getElementById("nombre").value;
    const esImportante = document.getElementById("inportante").checked;
    const noEsImportante = document.getElementById("noinportante").checked;

    if (tareaNombre.trim() === "") {
        alert("Escribe una descripción para la tarea");
        return;
    }
    if (!esImportante && !noEsImportante) {
        alert("Selecciona si la tarea es importante o no");
        return;
    }

    const tareaDiv = document.createElement("div");
    tareaDiv.classList.add("tarea");
    if (esImportante) tareaDiv.classList.add("importante");

    const textoTarea = document.createElement("span");
    textoTarea.textContent = tareaNombre;

    const checkboxRealizada = document.createElement("input");
    checkboxRealizada.type = "checkbox";
    checkboxRealizada.onchange = () => {
        textoTarea.classList.toggle("realizada", checkboxRealizada.checked);
    };

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => tareaDiv.remove();

    tareaDiv.appendChild(checkboxRealizada);
    tareaDiv.appendChild(textoTarea);
    tareaDiv.appendChild(botonEliminar);

    if (esImportante) {
        document.getElementById("columimpor").appendChild(tareaDiv);
    } else {
        document.getElementById("columnoimpor").appendChild(tareaDiv);
    }

    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("inportante").checked = false;
    document.getElementById("noinportante").checked = false;
}
