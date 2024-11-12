import express, { Response, Request } from 'express';
import { Persistance } from './Persistance';
import { Todo } from './Todo.ts';

const router = express.Router();

router.get('/todo', (req: Request, res: Response) => {
    res.status(200).send(Persistance.getJsonData());
});

router.post('/todo', (req: Request, res: Response) => {
    try {
        const data: Todo = {
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            dueDate: req.body.dueDate
        };

        Persistance.writeOnJson(Persistance.storageSize(), data);
        res.status(201).send("New todo entry");

    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
});

router.put('/todo/:id', (req: Request, res: Response) => {
    try {
        const data: Todo = {
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            dueDate: req.body.dueDate
        };
        
        const id = parseInt(req.params.id);

        Persistance.updateOnJson(id, data);
        res.status(200).send("Item changed");
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
});

router.delete('/todo/:id', (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        Persistance.delOnJson(id);
        res.status(204).send("Item removed");
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
}) 

export default router;
