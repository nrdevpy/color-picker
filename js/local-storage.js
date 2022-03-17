/* 
This file is used to save all picker
data in the browser storage
*/

// * Variables.
const storage = localStorage.getItem('colorValue') || '#ffffff';

// * Variables.
const saveColor = (value) => {
    localStorage.setItem('colorValue', value);
}

// * Events.
color.addEventListener('change', saveColor);