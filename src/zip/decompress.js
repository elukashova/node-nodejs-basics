import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';
import { getPath } from '../utils.js';

const fileToDecompress = 'archive.gz';
const targetFile = 'fileToCompress.txt';
const fileToDecompressPath = getPath(fileURLToPath(import.meta.url), fileToDecompress);
const targetFilePath = getPath(fileURLToPath(import.meta.url), targetFile);
const decompress = async (source, target) => {
    const gunzip = createGunzip();
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(target);
  
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress(fileToDecompressPath, targetFilePath);