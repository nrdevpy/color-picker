const color = document.forms['form']['color'];

// * Functions.
// Function to change hexadecimal color text and background color.

// Change hexadecimal color text, background color and save color.
const setColor = () => {
    // console.log ('Seleccionando color en color picker')
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