import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const server = express();

// eventually import routes from route folder
server.get('/', (req, res) => {
    res.send('hello world!');
});

export default server;
