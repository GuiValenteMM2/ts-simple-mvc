import express, { Express } from "express";
import router from "./model/Controller";
 
const fs = require('fs');

const app: Express = express();
const actualData = fs.readFileSync("./src/model/storage.json").toString();

app.use(express.json());

app.use('/api', router);

app.listen(3030, () => {
    console.log("App running at port 3030");
    console.log(actualData);
});

