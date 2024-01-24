const prefix = 'RSS_';

const parseEnv = (prefix) => {
    const output = Object.entries(process.env)
    .map(([key, value]) => {
        if (key.startsWith(prefix)) {
            return `${key}=${value};`;
        }
    })

    console.log(...output.filter(Boolean));
};

parseEnv(prefix);