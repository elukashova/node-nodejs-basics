import * as path from 'node:path';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ERROR_CODES } from '../consts.js';
import { errorHandler } from '../error-handler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFolderName = 'files';
const newFileName = 'fresh.txt';
const contentToAdd = 'I am fresh and young';
const pathToFile = path.join(__dirname, targetFolderName, newFileName);

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