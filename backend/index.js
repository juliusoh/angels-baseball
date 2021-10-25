const fs = require('fs');
const csv = require('csv-parser');
var cors = require('cors');
const path = require('path');

const inputFile = 'backend/data.csv';
let results = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

  });

const express = require('express');
const app = express();
const port = 1993;
app.use(cors());

app.get("/", (req, res) => {
  res.send('api running')
})

app.get('/results', (req, res) => {
  res.send(results);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on port ${port}`);
});
