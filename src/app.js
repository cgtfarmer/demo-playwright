var express = require('express');
var usersRouter = require('./users');

var app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.get('/health', async function(request, response) {
  response.json({ status: 'healthy' });
})

app.listen(3000, function() {
  console.log('App listening on port 3000');
})

module.exports = app;
