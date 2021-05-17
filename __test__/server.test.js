'use strict'; 

const server = require('../src/server');
const superTest = require('supertest');

const request = superTest(server.app);


describe('server', ()=>{
  it('should give 404 status', async ()=>{
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });
  it('should give 404 status', async ()=>{
    const response = await request.post('/');
    expect(response.status).toBe(404);
  });
  it ('should give 500 error', async ()=>{
    const response = await request.get('/bad');
    expect (response.status).toBe(500);
  });
  it ('should give a welcoming massage', async ()=>{
    let route = '/';
    const response = await request.get('/');
    expect (response.status).toBe(200);
    expect (response.text).toBe('Welcome To The SERVER.JS');
  });
});
