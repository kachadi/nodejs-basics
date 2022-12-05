import { fork } from 'child_process';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const scriptPath = `${__dirname}/files/script.js`;

const spawnChildProcess = async (args) => {
    fork(scriptPath, [...args.split(' ')])
        .on('exit', (code) => console.log(`Closed with code ${code}`));
};

// Put your arguments in function call to test this functionality
spawnChildProcess('--arg1 val --arg2 val2');
