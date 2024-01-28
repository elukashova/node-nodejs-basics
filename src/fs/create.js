import { writeFile } from 'node:fs/promises';
import { ERROR_CODES } from '../consts.js';
import { errorHandler, getPath } from '../utils.js';

const newFileName = 'fresh.txt';
const contentToAdd = 'I am fresh and young';
const pathToFile = getPath(import.meta.url, newFileName);

const create = async (filePath, fileContent) => {
    try {
        await writeFile(
            filePath,
            fileContent,
            { flag: 'wx' },
        );
    } catch (error) {
        errorHandler(error, ERROR_CODES.fileExists);
    }
};

await create(pathToFile, contentToAdd);