// * Variables.
const exit = document.getElementById('exit');
const color = document.forms['form']['color'];

// * Functions.
// Function to change hexadecimal color text and background color.
const setColor = () => {
    const value = color.value;    
    exit.innerHTML = exit.style.backgroundColor = value;
    saveColor(value);
}

// * Events.
color.addEventListener('change', setColor);