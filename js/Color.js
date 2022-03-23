class Color {
    static colorId = 0;
    
    constructor (color) {
        this._id = ++Color.colorId;
        this._color = color;
    }

    get color () {
        return this._color;
    }
    get id () {
        return this._id;
    }
}


/* color1 = new Color ('#ffffff');
console.log (color1); */
