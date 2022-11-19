'use strict';

// Document:
const d = document;

// Variable que guarda el div activo:
let divActivo = null; // Inicializa en null porque al principio ningún div está desplegado.

// Busco los divs:
let divs = [];

// Función que anima:
function Animacion(accion) {
    if (accion == 'DESPLEGAR') {
    } else {
    }
}

// Recorro el array de divs:
for (let div of divs) {
    // A cada div le asigno un onclick:
    div.addEventListener('click', (e) => {
        // Animaciones:
        console.info(e.currentTarget);
        if (divActivo == null) {
        } else if (divActivo == e.currentTarget) {
        } else {
        }
    });
}
