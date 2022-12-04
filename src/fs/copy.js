import * as fs from 'fs';
const fsPromises = fs.promises;

const sourceDir = 'src/fs/files';
const targetDir = `${sourceDir}_copy`;
const errorMsg = 'FS operation failed';

const copy = async () => {

    fs.stat(targetDir, async (err) => {

        if (err) {
            let files;

            try {
                files = await fsPromises.readdir(sourceDir);
            } catch (error) {
                console.error(error);
                throw new Error(errorMsg);
            }

            fsPromises.mkdir(targetDir);
            for (const file of files) {
                let readStream = fs.createReadStream(`${sourceDir}/${file}`);
                let writeStream = fs.createWriteStream(`${targetDir}/${file}`);
                readStream.pipe(writeStream);
            }
        } else {
            throw new Error(errorMsg);
        }
    })

};

await copy();