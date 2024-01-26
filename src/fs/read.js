import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../utils.js';
import { ERROR_CODES } from '../consts.js';
import { getPath } from '../get-path.js';

const targetFolderPath = getPath(fileURLToPath(import.meta.url), targetFile);

const read = async (folderToRead) => {
    try {
        const fileContent = await readFile(folderToRead, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await read(targetFolderPath);