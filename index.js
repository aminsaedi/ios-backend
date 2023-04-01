const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let objects = [];

// Create operation
app.post('/objects', (req, res) => {
  const newObject = req.body;
  objects.push(newObject);
  res.send(newObject);
});

// Read operation
app.get('/objects', (req, res) => {
  res.send(objects);
});

// Update operation
app.put('/objects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedObject = req.body;
  objects[id] = updatedObject;
  res.send(updatedObject);
});

// Delete operation
app.delete('/objects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedObject = objects[id];
  objects.splice(id, 1);
  res.send(deletedObject);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));

