const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

// Creates server and port
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Serves our static index.html
app.use(express.static(path.join(__dirname, '../client/dist')))

// Router to handle all requests
app.use('/api', router);

//Checks to see if server is set up properly
app.listen(port, () => console.log(`App listening on port ${port}!`))