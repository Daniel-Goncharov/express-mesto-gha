// импорты
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const NotFoundError = require('./errors/NotFoundError');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { validateSignup, validateSignin } = require('./middlewares/requestValidation');
const { errorHandler } = require('./middlewares/errorHandler');

const { PORT = 3000 } = process.env;
const app = express();
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Маршруты без авторизации
app.use('/signin', validateSignin, login);
app.use('/signup', validateSignup, createUser);

// Маршруты с обязательной авторизацией
app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

// проверка на корректность ввода адреса URL
app.use('*', (req, res, next) => {
  next(new NotFoundError({ message: 'Такой страницы не существует.' }));
});

// Обработчик ошибок celebrate
app.use(errors());

// Централизованный обработчик ошибок
app.use(errorHandler);

// Запуск сервера
app.listen(PORT);
