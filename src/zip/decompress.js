import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { getPath } from '../utils.js';

const fileToDecompress = 'archive.gz';
const decompressedFile = 'fileToCompress.txt';
const fileToDecompressPath = getPath(import.meta.url, fileToDecompress);
const decompressedFilePath = getPath(import.meta.url, decompressedFile);
const decompress = async (source, target) => {
    const gunzip = createGunzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(target);
  
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress(fileToDecompressPath, decompressedFilePath);