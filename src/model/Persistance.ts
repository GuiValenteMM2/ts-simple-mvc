import * as fs from 'fs'; 
import { Todo } from './Todo.ts';

const dataPath = 'storage.json';

export const Persistance = {
    getJsonData(): JSON {
        const data = fs.readFileSync(dataPath);
        return JSON.parse(data.toString());    
    },

    storageSize(): number {
        let data: any = [];
        data = fs.readFileSync(dataPath);

        return data.length;
    },

    writeOnJson(id: number, newData: Todo): Boolean {

        let actualData: any = [];
        
        if (fs.existsSync(dataPath)) {
            actualData = fs.readFileSync(dataPath);
            actualData.push({id,
                             newData});
            
            const finalData = JSON.stringify(actualData);   
            fs.writeFileSync(dataPath ,finalData);
            return true;
        } else {
            return false;
        }
    }
};