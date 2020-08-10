const express = require('express');
const bodyParser = require('body-parser');
//const fs = require('fs');
const app = express();

// app libraries
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const getDataFromFile = () => {
//   return JSON.parse(fs.readFileSync('./data/data.json'));
// };

// const writeDataToFile = (data) => {
//   return fs.writeFileSync('./data/data.json', JSON.stringify(data));
// };

app.get('/choclate', (_, res) => {
  return res.json(getDataFromFile());
});

app.post('/choclate/delete', (req, res) => {
  const {
    body: { id },
  } = req;
  const data = getDataFromFile();
  const newData = data.filter((item) => item.id.toString() !== id.toString());
  writeDataToFile(newData);
  return res.status(200);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
