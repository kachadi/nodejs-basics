const parseArgs = () => {
    process.argv.slice(2).forEach((val, id, arr) => {
        if (id % 2 === 0 ) {
            console.log(`${val.slice(2)} is ${arr[id+1]}`);
        }
    })
};

parseArgs();