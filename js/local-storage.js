/* 
This file is used to save all picker
data in the browser storage
*/

// * Variables.
let arrColor = [];
const section = document.getElementById('colorSection');


// * Functions.
const saveColor = (value) => {
    arrColor.push(value);
    localStorage.setItem('colorValue', JSON.stringify(arrColor));
};

// Hook every color of browser storage.
const loadColors = () => {
    arrColor = []; // Reset array to not duplicate datas.
    const storage = JSON.parse(localStorage.getItem('colorValue'));

    if (storage !== null) {
        let insHTML = ''; // Variable to insert html.
        for (let i of storage) {
            arrColor.push(i);
            insHTML += `
                <div class="colorSaved" style="background-color: ${i};">${i}</div>
            `;
        }
        section.innerHTML = insHTML;
    }
};