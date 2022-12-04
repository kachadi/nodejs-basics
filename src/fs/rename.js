import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

const sourcePath = `${__dirname}/files/wrongFilename.txt`;
const targetPath = `${__dirname}/files/properFilename.md`;
const errorMsg = 'FS operation failed';

const rename = async () => {
    fsPromises.rename(sourcePath, targetPath)
        .catch(() => {
            throw new Error(errorMsg);
        }) 
};

await rename();