import * as path from 'node:path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFolder = 'files';
const targetFolderPath = path.join(__dirname, targetFolder);

const list = async () => {
    let fileNames;
    try {
        fileNames = await readdir(targetFolderPath);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }

    console.log(fileNames);
};

await list();