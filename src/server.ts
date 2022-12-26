import express, {Request, Response, NextFunction} from 'express';

const server = express();

server.set('port', parseInt(process.env.PORT ?? '', 10) || 5000);
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use((error: any, request: Request, response: Response, next: NextFunction): void => {
    response.status(error.status).send(error.errors);
});

server.get('/', (request: Request, response: Response): void => {
    response.status(200).send('Hello world!')
});

export {server};
