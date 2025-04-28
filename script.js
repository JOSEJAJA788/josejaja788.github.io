// Variables globales para los números y el resultado
let num1, num2, resultado, operacion;

// Función para generar números aleatorios y realizar la operación
function generarNumeros(operacionSeleccionada) {
    // Generar números aleatorios entre 1 y 100
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    resultado = 0;

    // Cambiar el operador y calcular el resultado según la operación seleccionada
    if (operacionSeleccionada === 'suma') {
        document.getElementById('Operaciones').textContent = '+';
        resultado = num1 + num2;
    } else if (operacionSeleccionada === 'resta') {
        document.getElementById('Operaciones').textContent = '-';
        resultado = num1 - num2;
    } else if (operacionSeleccionada === 'producto') {
        document.getElementById('Operaciones').textContent = '×';
        resultado = num1 * num2;
    } else if (operacionSeleccionada === 'division') {
        document.getElementById('Operaciones').textContent = '÷';
        // Asegúrate de que no haya división por cero
        if (num2 === 0) num2 = 1;
        resultado = num1 / num2;
    }

    // Mostrar los números en la pantalla
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
}

// Función para manejar el clic en "Suma"
function btnSumar() {
    generarNumeros('suma');
}

// Función para manejar el clic en "Resta"
function btnResta() {
    generarNumeros('resta');
}

// Función para manejar el clic en "Producto"
function btnProducto() {
    generarNumeros('producto');
}

// Función para manejar el clic en "División"
function btnDivision() {
    generarNumeros('division');
}

// Función para corregir la respuesta del usuario
function corregir() {
    // Obtenemos la respuesta del usuario
    const respuestaUsuario = parseFloat(document.getElementById('respuesta_usuario').value);
    
    // Verificamos si la respuesta es correcta
    if (respuestaUsuario === resultado) {
        document.getElementById('msj_corecion').textContent = "¡Correcto! 🎉";
        document.getElementById('msj_corecion').style.color = 'green';
    } else {
        document.getElementById('msj_corecion').textContent = "Incorrecto. 😞 La respuesta correcta es " + resultado;
        document.getElementById('msj_corecion').style.color = 'red';
    }
}
