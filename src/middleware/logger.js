'use strict'; 
/**
 * @typedef {exports(request, response, next)} 
 * @returns {console massage}
 */
module.exports = (request, response, next) => {
  console.log('REQUEST INFORMATION :', request.method, request.path);
  next();
};