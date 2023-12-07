function placeBallsInBuckets(balls, buckets) {
    // Sort balls in descending order of volume
    balls.sort((a, b) => b.volume - a.volume);

    // the best bucket for a ball
    const findBestBucket = (ball) => {

        // Sort buckets based on how much space will be left after placing the ball
        buckets.sort((a, b) => (a.remainingVolume - ball.volume) - (b.remainingVolume - ball.volume));

        // Find the first bucket where the ball fits
        for (let bucket of buckets) {
            if (bucket.addBall(ball)) {
                return;
            }
        }
    };

    // Place each ball in the best bucket
    balls.forEach(ball => findBestBucket(ball));

    return buckets;
}

module.exports = placeBallsInBuckets;