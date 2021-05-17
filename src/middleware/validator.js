'use strict';

module.exports= (request , response, next)=>{
  if (!request.query.name){
    next ('YOU MUST ENTER NAME');
  } else {
    console.log('NAME :', request.query);
    next();
  }
};