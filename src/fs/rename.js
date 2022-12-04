import * as fs from 'fs';
const fsPromises = fs.promises;

const sourceDir = 'src/fs/files/wrongFilename.txt';
const targetDir = 'src/fs/files/properFilename.md';
const errorMsg = 'FS operation failed';

const rename = async () => {
    fs.stat(targetDir, async (err) => {
        if (err) {
            try {
                await fsPromises.rename(sourceDir, targetDir);
              } 
              catch (error) {
                console.error(error);
                throw new Error(errorMsg);
              }
        } else {
            throw new Error(errorMsg);
        }
    })
};

await rename();