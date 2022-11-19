'use strict';

/*
<div id="div"><p>El primer párrafo</p><p>El segundo párrafo</p>
    <p>
        El párrafo del <a href="#">link</a>
    </p>
</div>
*/

// Document:
const d = document;

// El div:
let div = d.querySelector('#div');

// Primer hijo y primer hijo html:
console.log('Primer hijo', div.firstChild);
console.log('Primer hijo html', div.firstElementChild);
console.log('-----');

// Último hijo y último hijo html:
console.log('Último hijo', div.lastChild);
console.log('Último hijo html', div.lastElementChild);
console.log('-----');

// Hijos e hijos html:
console.log('Hijos', div.childNodes);
console.log('Hijos html', div.children);