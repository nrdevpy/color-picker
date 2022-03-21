/* 
This file is used to save all picker
data in the browser storage
*/

// * Variables.
const storage = JSON.parse(localStorage.getItem('colorValue'));
const arrColor = [];

// Hook every color of browser storage.
if (storage !== null) {
    for (let i of storage) {
        console.log (`Taking data... ${i}`);
        arrColor.push(i);
    }
}

// * Functions.
const saveColor = (value) => {
    console.log (`Adding value: ${value} to the storage`);
    arrColor.push(value);
    localStorage.setItem('colorValue', JSON.stringify(arrColor));
    console.log (`Value added`);
}