import * as fs from 'fs';
import * as zlib from 'zlib';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const sourcePath = `${__dirname}/files/fileToCompress.txt`;
const targetPath = `${__dirname}/files/archive.gz`;


const compress = async () => {
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(targetPath);

    const compressStream = zlib.createGzip();
    
    readStream
        .pipe(compressStream)
        .pipe(writeStream)
        .on('error', (err) => {
            throw err;
        })
};

await compress();