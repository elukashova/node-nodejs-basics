import { createReadStream } from 'node:fs';
import { getPath } from '../utils.js';

const fileToRead = 'fileToRead.txt';
const fileToReadPath = getPath(import.meta.url, fileToRead);

const read = async (filePath) => {
    createReadStream(filePath).pipe(process.stdout);
};

await read(fileToReadPath);