import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';
import { getPath } from '../get-path.js';

const targetFolderPath = getPath(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        const fileNames = await readdir(targetFolderPath);
        console.log(fileNames);
    } catch (error) {
        return errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await list();