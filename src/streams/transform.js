import * as process from 'process';
import { pipeline, Transform } from 'stream';

const transform = async () => {
    const revertTransform = new Transform({
        transform(data, callback) {
            callback(null, data.toString().split('').reverse().join(''))
        },
    })

    pipeline(
        process.stdin,
        revertTransform,
        process.stdout,
        err => {
            throw err;
        }
    )
};

await transform();