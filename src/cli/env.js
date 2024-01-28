const prefix = 'RSS_';

const parseEnv = (prefix) => {
    const envVariables = Object.entries(process.env);
    
    const output = envVariables.map(([key, value], index) => {
        if (key.startsWith(prefix)) {
            const lastChar = index === envVariables.length - 1 ? '' : ';';
            return `${key}=${value}${lastChar}`;
        }
    })

    console.log(...output.filter(Boolean));
};

parseEnv(prefix);