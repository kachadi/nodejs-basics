import { Worker } from 'worker_threads';
import * as url from 'url';
import * as os from 'os';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const workerPath = `${__dirname}worker.js`;

const performCalculations = async () => {
    const CPU_CORES = os.cpus();
    let incrementalNum = 10;

    const resultsFromWorkers = await Promise.allSettled(CPU_CORES.map(() => {
        return new Promise((res, rej) => {
            const worker = new Worker(workerPath, { workerData: incrementalNum++ });
            worker.on('message', msg => res(msg));
            worker.on('error', err => rej(err));
        });
    }))

    const resultsArr = resultsFromWorkers.map(({ status, value }) => {
        let resultObj;
        switch(status){
          case 'fulfilled': 
            resultObj = { status: 'resolved', data: value };
            break;
          default: 
            resultObj = { status: 'error', data: null };
        }
       return resultObj;
    });

    console.log(resultsArr);
};

await performCalculations();