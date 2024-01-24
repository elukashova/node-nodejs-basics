import * as path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFolder = 'files';
const targetFile = 'fileToRead.txt';
const targetFolderPath = path.join(__dirname, targetFolder, targetFile);

const read = async () => {
    try {
        const fileContent = await readFile(targetFolderPath, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await read();