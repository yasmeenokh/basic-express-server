'use strict';

const server = require('../src/server');

// const validator = require('../src/middleware/validator');
const superTest = require('supertest');

const request = superTest(server.app);


describe('middleware validator', ()=>{
  it('should have a person name', async ()=>{
    const response = await request.get('/person?name=yasmeen');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('yasmeen');
  });
  
  it ('should give 500 error if no name', async ()=>{
    const response = await request.get('/person');
    expect(response.status).toBe(500);
  });
  it('should give 404 status', async ()=>{
    const response = await request.post('/person?name=yasmeen');
    expect(response.status).toBe(404);
  });
});