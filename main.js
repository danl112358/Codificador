modificarImagen= function(){
    let imagen;
    imagen=document.getElementById("imagen")
    imagen.src="imagenes/ABC.png"
}

regresarImagen= function(){
    let imagen;
    imagen=document.getElementById("imagen")
    imagen.src="imagenes/746199.jpg"
}

function convertirLetrasANumeros() {
    const contenido = document.getElementById('areaTexto').value.trim();

    if (contenido === '') {
        alert('El texto está vacío. Por favor, escribe algo antes de convertir.');
        return;
    }

    let resultado = '';

    for (let i = 0; i < contenido.length; i++) {
        const letra = contenido.charAt(i).toLowerCase();

        // Definir el mapeo de letras a números
        const conversiones = {
            'a': 10, 'b': 12, 'c': 14, 'd': 16, 'e': 18,
            'f': 20, 'g': 22, 'h': 24, 'i': 26, 'j': 28,
            'k': 30, 'l': 32, 'm': 34, 'n': 36, 'ñ': 38,
            'o': 40, 'p': 42, 'q': 44, 'r': 46, 's': 48,
            't': 50, 'u': 52, 'v': 54, 'w': 56, 'x': 58,
            'y': 60, 'z': 62
        };

        if (letra in conversiones) {
            resultado += conversiones[letra];
        } else {
            // Si la letra no está en el mapeo, mantenerla como está
            resultado += letra;
        }
    }

    // Puedes mostrar el resultado en la consola o alerta, o hacer lo que desees con él
    console.log('Resultado de la conversión:', resultado);
}


function guardarComoTexto() {
    const contenido = document.getElementById('areaTexto').value.trim();

    if (contenido === '') {
        alert("El texto está vacío. Por favor, ingresa algún valor");
        return;
    }

    let resultado = '';

    // Mapeo de letras a números
    const conversiones = {
        'a': 10, 'b': 12, 'c': 14, 'd': 16, 'e': 18,
        'f': 20, 'g': 22, 'h': 24, 'i': 26, 'j': 28,
        'k': 30, 'l': 32, 'm': 34, 'n': 36, 'ñ': 38,
        'o': 40, 'p': 42, 'q': 44, 'r': 46, 's': 48,
        't': 50, 'u': 52, 'v': 54, 'w': 56, 'x': 58,
        'y': 60, 'z': 62
    };

    for (let i = 0; i < contenido.length; i++) {
        const letra = contenido.charAt(i).toLowerCase();

        if (letra in conversiones) {
            resultado += conversiones[letra];
        } else {
            // Si la letra no está en el mapeo, mantenerla como está
            resultado += letra;
        }
    }

    const enlace = document.createElement('a');
    const blob = new Blob([resultado], { type: 'text/plain' });
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'documento_creado.txt';
    enlace.click();
}



function convertirNumerosALetras() {
    const contenido = document.getElementById('areaTexto').value.trim();

    if (contenido === '') {
        alert("El texto está vacío. Por favor, ingresa algún valor");
        return;
    }

    // Mapeo inverso de números a letras
    const conversionesInversas = {
        10: 'a', 12: 'b', 14: 'c', 16: 'd', 18: 'e',
        20: 'f', 22: 'g', 24: 'h', 26: 'i', 28: 'j',
        30: 'k', 32: 'l', 34: 'm', 36: 'n', 38: 'ñ',
        40: 'o', 42: 'p', 44: 'q', 46: 'r', 48: 's',
        50: 't', 52: 'u', 54: 'v', 56: 'w', 58: 'x',
        60: 'y', 62: 'z'
    };

    let resultado = '';
    let numeroActual = '';

    for (let i = 0; i < contenido.length; i++) {
        const caracter = contenido.charAt(i);

        // Construir el número actual
        if (caracter !== ' ') {
            numeroActual += caracter;
        } else {
            // Si es un espacio, agregar al resultado y reiniciar el número actual
            resultado += ' ';
            numeroActual = '';
            continue;
        }

        // Cuando tenemos dos dígitos, convertir a letra
        if (numeroActual.length === 2) {
            const numero = parseInt(numeroActual, 10);

            if (!isNaN(numero) && numero in conversionesInversas) {
                resultado += conversionesInversas[numero];
            } else {
                // Si el número no está en el mapeo inverso, mantenerlo como está
                resultado += numeroActual;
            }

            // Reiniciar el número actual
            numeroActual = '';
        }
    }

    // Puedes mostrar el resultado en la consola o alerta, o hacer lo que desees con él
    const enlace = document.createElement('a');
    const blob = new Blob([resultado], { type: 'text/plain' });
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'documento_creado.txt';
    enlace.click();
}

function guardarTextoEnArchivo(texto, nombreArchivo) {
    const blob = new Blob([texto], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, nombreArchivo);
}


function leerArchivo() {
    const inputFile = document.getElementById('cargarArchivo');
    const contenidoArchivo = document.getElementById('contenidoArchivo');

    const file = inputFile.files[0];

    if (!file) {
        return; // No hay archivo seleccionado
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const contenido = e.target.result.trim();

        if (contenido === '') {
            alert('El archivo está vacío. Por favor, selecciona otro archivo.');
            limpiarArchivo();
            return;
        }

        // Aquí puedes realizar la lógica de decodificación o mostrar el contenido
        // Muestra el resultado en la sección correspondiente
        contenidoArchivo.innerText = contenido;
    };

    reader.readAsText(file);
}

function limpiarArchivo() {
document.getElementById('cargarArchivo').value = ''; // Limpiar la selección del archivo
document.getElementById('contenidoArchivo').innerText = ''; // Limpiar el contenido mostrado
}