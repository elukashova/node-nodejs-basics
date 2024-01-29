import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback) {
            const reversedChunk = chunk.toString().trim().split('').reverse().join('');
            callback(null, `${reversedChunk}\n`);
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();