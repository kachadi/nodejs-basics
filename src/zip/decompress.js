import * as fs from 'fs';
import * as zlib from 'zlib';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const sourcePath = `${__dirname}/files/archive.gz`;
const targetPath = `${__dirname}/files/fileToCompress.txt`;


const decompress = async () => {
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(targetPath);

    const decompressStream = zlib.createUnzip();
    
    readStream
        .pipe(decompressStream)
        .pipe(writeStream)
        .on('error', (err) => {
            throw err;
        }) 
};

await decompress();