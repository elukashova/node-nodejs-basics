import * as crypto from 'node:crypto';
import { createReadStream } from 'node:fs';
import { getPath } from '../utils.js';

const sourceFileName = 'fileToCalculateHashFor.txt';
const sourceFilePath = getPath(import.meta.url, sourceFileName);
const calculateHash = async (sourcePath) => {
    const hash = crypto.createHash('sha256').setEncoding('hex');
    createReadStream(sourcePath)
    .pipe(hash)
    .pipe(process.stdout);
};

await calculateHash(sourceFilePath);