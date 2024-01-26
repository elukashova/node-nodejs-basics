const prefix = '--';

const parseArgs = (prefix) => {
    const args = process.argv.slice(2);

    const processedData = args.reduce((acc, arg) => {
        if (arg.startsWith(prefix)) {
            const key = [arg.slice(2)];
            acc.push(key);
        } else {
            const pair = acc.at(-1);
            pair?.push(arg);
        }
        return acc;
    }, [])

    const output = processedData.map(([key, value]) => `${key} is ${value}`).join(', ');

    console.log(output);
};

parseArgs(prefix);