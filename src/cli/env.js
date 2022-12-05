const parseEnv = () => {
    Object.entries(process.env)
        .filter((val) => val[0].slice(0,4) === 'RSS_')
        .forEach((val) => {
            console.log(`${val[0]}=${val[1]}`);
        })
};

parseEnv();