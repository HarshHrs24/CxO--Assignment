// Importing the Bucket and Ball models
const Bucket = require('../models/Bucket');
const Ball = require('../models/Ball');

// Importing the logic for placing balls in buckets
const placeBallsInBucketsLogic = require('../logic/placeBallsInBuckets');

// Controller for ball placement logic
const ballController = {

    // Function to handle the placement of balls in buckets request
    placeBallsInBuckets: (req, res) => {
        const bucketsData = req.body.buckets;

        // Creating an array to hold Ball instances
        let balls = [];

        // Creating Ball instances based on request data
        req.body.balls.forEach(ballData => {
            for (let i = 0; i < ballData.count; i++) {
                balls.push(new Ball(ballData.volume, ballData.color));
            }
        });
        
        // Creating Bucket instances from request data
        let buckets = bucketsData.map(bucket => new Bucket(bucket.volume));
    
        // The ball placement logic
        let updatedBuckets = placeBallsInBucketsLogic(balls, buckets);
    
        // Sending back the result as JSON
        res.json(updatedBuckets.map(bucket => bucket.getCurrentState()));
    }
};

module.exports = ballController;
