import { spawn } from 'child_process';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const scriptPath = `${__dirname}/files/script.js`;

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptPath, ...args.split(' ')]);

    process.stdin
        .on('data', data => {
            childProcess.stdin.write(data);
        })

    childProcess.stdout
        .on('data', data => {
            console.log(data.toString());
        })
};

// Put your arguments in function call to test this functionality
spawnChildProcess('--arg1 val --arg2 val2');
