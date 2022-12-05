import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const fsPromises = fs.promises;

const sourcePath = `${__dirname}/files`;
const targetPath = `${__dirname}/files_copy`;
const errorMsg = 'FS operation failed'; 

const copy = async () => {
    fsPromises.readdir(sourcePath)
        .then(files => {
            fsPromises.mkdir(targetPath)
            .catch(() => {
                throw new Error(errorMsg);
            })                    
            for (const file of files) {
                let readStream = fs.createReadStream(`${sourcePath}/${file}`);
                let writeStream = fs.createWriteStream(`${targetPath}/${file}`);
                readStream.pipe(writeStream);
            }
        })
        .catch(() => {
            throw new Error(errorMsg);
        })
};

await copy();