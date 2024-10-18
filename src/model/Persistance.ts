import * as fs from 'fs'; 
import { Todo } from './Todo.ts';

const dataPath = 'storage.json';

module.exports(() => {

    function getJsonData() {
        const data = fs.readFileSync(dataPath);
        return JSON.parse(data.toString());    
    }

    function writeOnJson(newData: Todo) {
        const data = JSON.stringify(newData);
        fs.writeFileSync(dataPath, data);
    }
});