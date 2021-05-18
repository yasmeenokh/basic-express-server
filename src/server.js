'use strict';
/**
 * adding dependencies
 */
const express = require('express');
const app = express();
/**
 * Requiring the validator and the middleware
 */
const logger = require('../src/middleware/logger');
const validator = require('../src/middleware/validator');
/**
 * Requiring the error handlers
 */
const errorHandlers = require('../src/error-handlers/500');
const notFoundHandlers = require('../src/error-handlers/404');
/**
 * Make use of the logger dependencies 
 */
app.use(logger);
app.use(express.json());

/**
 * This function is used to call the home Route
 * @param {request} send request
 * @param {response} send response
 * @returns {response} console massage 
 */
app.get('/', (request, response)=>{
  response.send('Welcome To The SERVER.JS');
});
/**
 * This function is used to call the home Route
 * @param {request} send request
 * @param {response} send response
 * @returns {response=json}  name
 */
// localhost:3000/person?name=yasmeen
app.get('/person', validator, (request, response) => {
  response.status(200).json({
    name: request.query.name,
  });
});


/**
 * This function is used to call the home Route
 * @param {request} send request
 * @param {response} send response
 * @returns {response} error massage 
 */
app.get('/bad', (request, response)=>{
  throw new Error('SOMETHING WENT WRONG');
});
/**
 * Make use of the error handlers
 */
app.use(errorHandlers);
app.use('*', notFoundHandlers);

/**
 * This function is used to start listening to app on PORT
 * @param {PORT} the port to listen with
 */
function start(PORT){
  app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
  });
}
/**
 * @typedef {exports(app, start} 
 */
module.exports= {
  app : app,
  start : start,
};