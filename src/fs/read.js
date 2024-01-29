import { readFile } from 'node:fs/promises';
import { ERROR_CODES } from '../consts.js';
import { errorHandler, getPath } from '../utils.js';

const targetFile = 'fileToRead.txt';
const targetFolderPath = getPath(import.meta.url, targetFile);

const read = async (folderToRead) => {
    try {
        const fileContent = await readFile(folderToRead, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await read(targetFolderPath);