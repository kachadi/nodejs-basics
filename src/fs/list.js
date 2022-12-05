import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

const targetPath = `${__dirname}/files/`;
const errorMsg = 'FS operation failed';

const list = async () => {
    await fsPromises.readdir(targetPath)
        .then(data => console.log(data))
        .catch(() => {
            throw new Error(errorMsg);
        })   
};

await list();