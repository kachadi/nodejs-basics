import * as process from 'process';
import * as fs from 'fs';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const sourcePath = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {
    const writeStream = fs.createWriteStream(sourcePath);
    process.stdin.pipe(writeStream);
};

await write();