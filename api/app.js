var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', require('./routes/auth')); 
app.use('/api/users', require('./routes/user'));

// app.listen(process.env.PORT || 5000, () => {
//     console.log('Backend server is running!')
// });




module.exports = app;
