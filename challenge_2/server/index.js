const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../client/dist')));

//CSV DATEBASE
let csv = '';

app.get('/api', (req, res) => {
  res.status(200).send(csv)
})

app.post('/api', (req, res) => {
  let firstLine = Object.keys(req.body)
  firstLine.splice(firstLine.length - 1, 1);
  csv = firstLine + '\n'

  var flatten = (node) => {
    for(let key in node) {
      if (key !== 'children') {
        csv += node[key] + ',';
      } else {
        csv += '\n';
      }
    }
    if (node.children.length) {
      for(let child of node.children) {
        flatten(child)
      }
    }
  }
  flatten(req.body);
  
  res.status(200).send('success');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));