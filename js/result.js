document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Array de preguntas y respuestas correctas
    const respuestasCorrectas = [
        "are produced",
        "have been made", 
        "had found", 
        "was being fixed", 
        "is wasted", 
        "was being baked", 
        "was being submitted", 
        "was being sent", 
        "is being developed", 
        "was being attended"];

    // Obtener todas las opciones seleccionadas
    const opcionesSeleccionadas = document.querySelectorAll('input[type="radio"]:checked');
// Verificar si cada opción seleccionada es una respuesta correcta


    // Verificar si el número de opciones seleccionadas es igual al número de respuestas correctas
    if (opcionesSeleccionadas.length === respuestasCorrectas.length) {
        // Inicializar el contador de respuestas correctas
        let respuestasCorrectasCount = 0;

        // Verificar si cada opción seleccionada es una respuesta correcta
        opcionesSeleccionadas.forEach(opcion => {
            if (respuestasCorrectas.includes(opcion.value)) {
                respuestasCorrectasCount++;
            }
        });

        // Calcular el promedio
        const promedio = (respuestasCorrectasCount / respuestasCorrectas.length) * 100;

        // Mostrar el promedio en la página
        document.getElementById('resultado').innerHTML = `Tu promedio es: ${promedio.toFixed(2)}%`;

        // Deseleccionar todas las opciones
        opcionesSeleccionadas.forEach(opcion => {
            opcion.checked = false;
        });

        // Enviar el formulario mediante AJAX
        const formData = new FormData(document.getElementById('passiveVoiceForm'));
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/passiveResult.html", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Hacer algo con la respuesta del servidor si es necesario
            }
        };
        xhr.send(formData);
    } else {
        // Mostrar un mensaje de error o realizar alguna acción si no se han respondido todas las preguntas
        alert("Por favor, responde todas las preguntas antes de enviar el formulario.");
    }
});
