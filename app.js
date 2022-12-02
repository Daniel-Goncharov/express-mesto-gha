const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users'); // импортируем роутер Users
const cards = require('./routes/cards'); // импортируем роутер Cards

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// временное решение авторизации
app.use((req, res, next) => {
  req.user = {
    _id: '6389e9db406cfea2b5f15ba3',
  };

  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use('/users', users); // запускаем роутер Users
app.use('/cards', cards); // запускаем роутер Cards

app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Неверный URL для запроса.' });
}); // проверка на корректность ввода адреса URL

app.listen(PORT);
