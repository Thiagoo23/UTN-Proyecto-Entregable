var createError = require('http-errors')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

// Index
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// Indumentaria
var indumentariaRouter = require('./routes/indumentaria');

// Nike
var nikeRouter = require('./routes/nike');

// Registro
var registroRouter = require('./routes/registro');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/indumentaria', indumentariaRouter);
app.use('/nike', nikeRouter);
app.use('/registro', registroRouter);

module.exports = app;
