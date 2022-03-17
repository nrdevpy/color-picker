const exit = document.getElementById('exit');
const color = document.forms['form']['color'];

// Event to change hexadecimal color text and background color.
color.addEventListener('input', () => {
    const value = color.value;
    
    exit.innerHTML = exit.style.backgroundColor = value;
});