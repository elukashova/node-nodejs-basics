import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { getPath } from '../utils.js';

const fileToCompress = 'fileToCompress.txt';
const compressedFile = 'archive.gz';
const fileToCompressPath = getPath(import.meta.url, fileToCompress);
const compressedFilePath = getPath(import.meta.url, compressedFile);

const compress = async (source, target) => {
    const gzip = createGzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(target);
    readStream.pipe(gzip).pipe(writeStream);
};

await compress(fileToCompressPath, compressedFilePath);