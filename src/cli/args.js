const parseArgs = () => {
    let resultArr = [];
    let miniArr = [];
    process.argv.slice(2)
        .forEach((val,id) => {
            if (id === 0 || id % 2 === 0 ) {
                miniArr.push(val)
            } else {
                miniArr.push(val);
                resultArr.push(miniArr);
                miniArr = [];
            }
        })
    resultArr.forEach(val => {
        console.log(`${val[0].slice(2)} is ${val[1]}`);
    })
};

parseArgs();