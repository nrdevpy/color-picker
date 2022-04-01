class Color {
    static colorId = 0;
    
    constructor (color) {
        this._id = ++Color.colorId;
        this._color = color;
    }
}

/* color1 = new Color ('#ffffff');
console.log (color1); */
