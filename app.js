const express = require('express');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const db = mongoose.connect('mongodb://localhost/book_db')
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my nodemon API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});