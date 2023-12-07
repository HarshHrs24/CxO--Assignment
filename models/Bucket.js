class Bucket {
    constructor(volume) {
        this.volume = volume; 
        this.balls = [];
        this.remainingVolume = volume;
    }

    // Method to add a ball to the bucket
    addBall(ball) {
        if (ball.volume <= this.remainingVolume) {
            this.balls.push(ball);
            this.remainingVolume -= ball.volume;
            return true; 
        } 
        return false;
    }

    checkRemainingVolume() {
        return this.remainingVolume;
    }

    getCurrentState() {
        return {
            totalVolume: this.volume,
            remainingVolume: this.remainingVolume,
            balls: this.balls.map(ball => ball.color + ' ball with volume ' + ball.volume)
        };
    }
}

module.exports = Bucket; 
