import * as fs from 'fs'; 
import { Todo } from './Todo.ts';

export const Persistance = {
    dataPath: "./src/model/storage.json",

    getJsonData(): string {
        const data = fs.readFileSync(this.dataPath).toString();
        const jsonString = JSON.parse(data);
        return jsonString;
    },

    storageSize(): number {
        const data = fs.readFileSync(this.dataPath).toString();
        const jsonData = JSON.parse(data);

        return jsonData["data"].length;
    },

    writeOnJson(id: number, newData: Todo) {
        if (fs.existsSync(this.dataPath)) {
            const actualData = fs.readFileSync(this.dataPath).toString();
            const parsedData = JSON.parse(actualData);

            parsedData.data.push({
                id,
                newData
            });

            const finalData = JSON.stringify(parsedData);   
            fs.writeFileSync(this.dataPath ,finalData);
        } 
    },

    delOnJson(id: number) {
        if (fs.existsSync(this.dataPath)) {
            const actualData = fs.readFileSync(this.dataPath).toString();
            const parsedData = JSON.parse(actualData);
            
            if (id < parsedData.data.length && id >= 0) {
                parsedData.data.splice(id, 1);
            
                const finalData = JSON.stringify(parsedData);
                fs.writeFileSync(this.dataPath, finalData);
            }
        }
    },

    updateOnJson(id: number, newItem: Todo) {
        if (fs.existsSync(this.dataPath)) {
            const actualData = fs.readFileSync(this.dataPath).toString();
            const parsedData = JSON.parse(actualData);

            if (id >= 0 && id <= parsedData.length) {
                parsedData.data.splice(id, 1, newItem);

                const finalData = JSON.stringify(parsedData);
                fs.writeFileSync(this.dataPath, finalData);
            }
        }
    }
};