import express, {Request, Response, json } from 'express';
import todolistRouter from './routers/todolist-router';
import dotenv from 'dotenv';

const server = express();
server.use(json());
server.use(todolistRouter);
dotenv.config();

const port: number = parseInt(process.env.PORT) || 5000;
server.listen(port, () => {
    console.log("Listen on port " + port);
})