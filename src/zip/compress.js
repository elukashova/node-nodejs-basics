import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { getPath } from '../utils.js';

const fileToCompress = 'fileToCompress.txt';
const targetFile = 'archive.gz';
const fileToCompressPath = getPath(fileURLToPath(import.meta.url), fileToCompress);
const targetFilePath = getPath(fileURLToPath(import.meta.url), targetFile);

const compress = async (source, target) => {
    const gzip = createGzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(target);
    readStream.pipe(gzip).pipe(writeStream);
};

await compress(fileToCompressPath, targetFilePath);