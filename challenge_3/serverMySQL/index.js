const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`App listening on port ${port}!`));