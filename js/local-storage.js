/* 
This file is used to save all picker
data in the browser storage
*/

// * Variables.
const storage = JSON.parse(localStorage.getItem('colorValue'));
const arrColor = [];
const section = document.getElementById('colorSection');

// Hook every color of browser storage.
const loadColors = () => {
    if (storage !== null) {
        let insHTML = '';
        
        for (let i of storage) {
            console.log (`Taking data... ${i}`);
            arrColor.push(i);
            insHTML += `
                <div class="colorTest" style="background-color: ${i};">${i}</div>
            `;
        }

        section.innerHTML = insHTML;
    }
}

// * Functions.
const saveColor = (value) => {
    console.log (`Adding value: ${value} to the storage`);
    arrColor.push(value);
    localStorage.setItem('colorValue', JSON.stringify(arrColor));
    console.log (`Value added`);
}