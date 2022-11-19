'use strict';

// Document:
const d = document;

// Armado del array:
let arrayImagenes = [];
for (let i = 1; i <= 12; i++) {
    arrayImagenes.push(`queen-${i < 10 ? '0' : ''}${i}.jpg`);
}

// Búsqueda de elementos:
let btnAnt, btnSig, imgBig, imgs;

imgBig = {};
btnAnt = {};
btnSig = {};
imgs = [];

console.log(imgBig, btnAnt, btnSig, imgs);

// Acción para cambiar el src:
for (let img of imgs) {
}

// Identifico los topes:
let movimientoImgs = 1,
    posActual = 0,
    posInicial = 0,
    // El total de imágenes - la cantidad de miniaturas.
    posFinal = arrayImagenes.length - imgs.length;

// Navegación:
const Navegacion = (direccion) => {};

// Botón anterior:
btnAnt.addEventListener('click', (e) => {
    Navegacion('ant');
});

// Botón siguiente:
btnSig.addEventListener('click', (e) => {
    Navegacion('sig');
});
