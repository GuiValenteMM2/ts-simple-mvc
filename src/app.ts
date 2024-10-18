import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send("We good");
});

app.listen(3030, () => {
    console.log("App running at port 3030");
});

