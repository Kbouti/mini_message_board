var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// To run app:
// npm run devstart

// Or:
// DEBUG=mini-message-board:* npm start

// ************************************************************************************************
// App has been deployed on the PaaS Adaptable. Domain name: 
// https://messageboard-1.adaptable.app/
// ************************************************************************************************

// Next assignment: Add data persistence with a database: 
// https://www.theodinproject.com/lessons/nodejs-installing-postgresql

// Creating a database "message_board"
// Next we'll create table within message_board: "messages"
// We'll need to define parameters for messages. Message needs text and a user, just two strings

// Then we need to access our db, populate our db, and modify our db when adding messages



// ************************************************************************************************