'use strict';

const express = require('express');
const app = express();

const errorHandlers = require('../src/error-handlers/500');
const notFoundHandlers = require('../src/error-handlers/404');

const logger = require('../src/middleware/logger');
const validator = require('../src/middleware/validator');



app.get('/', (request, response)=>{
  response.send('Welcome To The SERVER.JS');
});

// localhost:3000/person?name=yasmeen
app.get('/person', validator, (request, response) => {
  response.status(200).json({
    name: request.query.name,
  });
});



app.get('/bad', (request, response)=>{
  throw new Error('SOMETHING WENT WRONG');
});

app.use(errorHandlers);
app.use('*', notFoundHandlers);
app.use(logger);
app.use(express.json());


function start(PORT){
  app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  });
}

module.exports= {
  app : app,
  start : start,
};