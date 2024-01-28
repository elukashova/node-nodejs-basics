import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getPath } from '../utils.js';

const fileToWrite = 'fileToWrite.txt';
const fileToWritePath = getPath(fileURLToPath(import.meta.url), fileToWrite);
const write = async (filePath) => {
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write(fileToWritePath);