import { readdir } from 'node:fs/promises';
import { ERROR_CODES } from '../consts.js';
import { errorHandler, getPath } from '../utils.js';

const targetFolderPath = getPath(import.meta.url);

const list = async () => {
    try {
        const fileNames = await readdir(targetFolderPath);
        console.table(fileNames);
    } catch (error) {
        return errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await list();