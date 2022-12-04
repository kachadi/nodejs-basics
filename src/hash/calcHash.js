import * as crypto from 'crypto';
import * as fs from 'fs';
import * as url from 'url';

const fsPromises = fs.promises;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const sourcePath = `${__dirname}/files/fileToCalculateHashFor.txt`;

const calculateHash = async () => {
    fsPromises.readFile(sourcePath, 'utf-8', { flag: 'wx'})
        .then(data => console.log(crypto.createHash('sha256').update(data).digest('hex')))
        .catch(err => console.error(err))
};

await calculateHash();