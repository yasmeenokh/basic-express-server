'use strict';


module.exports = (request, response) =>{
  response.status(404).json({
    status : 404,
    message : 'Page Not Found',
  });
};