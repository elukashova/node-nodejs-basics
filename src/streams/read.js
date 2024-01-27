import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getPath } from '../utils.js';

const fileToRead = 'fileToRead.txt';
const fileToReadPath = getPath(fileURLToPath(import.meta.url), fileToRead);

const read = async (filePath) => {
    createReadStream(filePath).pipe(process.stdout);
};

await read(fileToReadPath);