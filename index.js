'use strict'; 
const server = require('./src/server.js');

require('dotenv').config();
const PORT = process.env.PORT || 3030;

server.start(PORT);