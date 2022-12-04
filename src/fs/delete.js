import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

const removePath = `${__dirname}/files/fileToRemove.txt`;
const errorMsg = 'FS operation failed';

const remove = async () => {
    fsPromises.unlink(removePath)
        .catch(() => {
            throw new Error(errorMsg);
        }) 
};

await remove();