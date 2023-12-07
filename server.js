// Importing modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Importing Controller
const ballController = require('./controllers/ballController');

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// API endpoint
app.post('/placeBallsInBuckets', ballController.placeBallsInBuckets);

// Setting up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
