import * as fs from 'fs';
const fsPromises = fs.promises;
 
const create = async () => {
   
    fs.stat('src/fs/files/fresh.txt', (err) => {
        if (err) {
            fsPromises.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                if (err) throw err;
            })
        } else {
            throw new Errow('FS operation failed')
        }
    })
   
};
 
await create();