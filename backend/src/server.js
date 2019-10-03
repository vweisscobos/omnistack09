const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ekk3k.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3333, () => {
  console.log('Listening PORT 3333');
});