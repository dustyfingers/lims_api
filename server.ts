import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

// import routes
import authRoutes, { initAuthRoutes } from './routes/auth';

const server = express();

// parse application/json requests
server.use(bodyParser.json());

// init prisma and pass value to routes
const prisma = new PrismaClient();

initAuthRoutes(prisma);

// eventually import routes from route folder
server.get('/', (req, res) => {
    res.send('hello world!');
});

server.use('/auth', authRoutes);

export default server;
