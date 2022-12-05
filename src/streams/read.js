import * as process from 'process';
import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const sourcePath = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
    const readStream = fs.createReadStream(sourcePath);
    readStream.pipe(process.stdout);
};

await read();