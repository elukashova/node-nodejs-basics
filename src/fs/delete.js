import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFolder = 'files';
const fileToRemove = 'fileToRemove.txt';
const targetFilePath = path.join(__dirname, targetFolder, fileToRemove);

const remove = async () => {
    try {
        await fs.rm(targetFilePath);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    } 
};

await remove();