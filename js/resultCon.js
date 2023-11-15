document.getElementById('conditionalForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  
    // Array de respuestas correctas
    const respuestasCorrectas = ["2nd conditional1", "2nd conditional2", "2nd conditional3", "1st conditional4", "2nd conditional5"];
  
    // Obtener todas las opciones seleccionadas
    const opcionesSeleccionadas = document.querySelectorAll('input[type="radio"]:checked');
  
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
  
      // Mostrar el resultado en la página
      document.getElementById('resultado').innerText = `Tu resultado es: ${promedio.toFixed(2)}%`;
  
      // Deseleccionar todas las opciones
      opcionesSeleccionadas.forEach(opcion => {
        opcion.checked = false;
      });
    } else {
      // Mostrar un mensaje de error o realizar alguna acción si no se han respondido todas las preguntas
      alert("Por favor, responde todas las preguntas antes de enviar el formulario.");
    }
});
