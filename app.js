var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const apicache = require('apicache');
const cors = require('cors');
var helmet = require('helmet');

//const cache = apicache.middleware;
process.env.NODE_ENV = 'development';

var app = express();

app.use(helmet());
app.use(cors('*'));
//app.use(cache('5 minutes'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', require('./routes/clinic.routes'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('an error has occured');
});

module.exports = app;
