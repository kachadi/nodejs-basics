import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

const targetPath = `${__dirname}/files/fresh.txt`;
const fileString = 'I am fresh and young';
const errorMsg = 'FS operation failed'; 
 
const create = async () => {
    fsPromises.writeFile(targetPath, fileString, { flag: 'wx+'})
        .catch(() => {
            throw new Error(errorMsg);
        }) 
};
 
await create();