const exit = document.getElementById('exit');
const color = document.forms['form']['color'];

// Event to change hexadecimal color text.
color.addEventListener('input', () => {
    const value = color.value;
    
    exit.innerHTML = value;
})