import express, {Express, Response, Request } from 'express';
import { Todo } from './Todo';
import { Persistance }from './Persistance';
const router = express.Router();

router.get('/todo', (req: Request, res: Response) => {
    res.send(Persistance.getJsonData())
    res.status(200);
});

router.post('/todo', (req: Request, res: Response) => {
    const data = req.body;
    try {
        Persistance.writeOnJson(Persistance.storageSize(), data);
        res.status(201);
    } catch (error) {
        console.log(error);
        res.send(error);
        res.status(404);
    }
});