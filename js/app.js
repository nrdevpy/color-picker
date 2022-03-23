// TODO: Evitar que se puedan guardar colores iguales.
// TODO: Poder eliminar colores.


// * Variables.
const exit = document.getElementById('exit');
const color = document.forms['form']['color'];

// * Functions.
// Change hexadecimal color text, background color and save color.
const setColor = () => {
    const value = color.value;    
    exit.innerHTML = exit.style.backgroundColor = value;
    
    saveColor (value);
    setTimeout (loadColors, 100);
}

// * Events.
color.addEventListener('change', setColor);

// * Start app.
const startApp = () => {
    loadColors();
}