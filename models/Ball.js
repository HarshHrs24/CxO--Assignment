class Ball {
    constructor(volume, color) {
        this.volume = volume; 
        this.color = color; 
    }

    getInfo() {
        return `${this.color} ball with volume ${this.volume}`;
    }
}

module.exports = Ball; 
