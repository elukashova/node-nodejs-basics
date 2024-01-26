import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler, getPath, doesFileExist } from '../utils.js';
import { errorMessage, ERROR_CODES } from '../consts.js';

const wrongFileName = 'wrongFilename.txt';
const properFileName = 'properFilename.md';
const wrongFilePath = getPath(fileURLToPath(import.meta.url), wrongFileName);
const targetFilePath = getPath(fileURLToPath(import.meta.url), properFileName);

const rename = async (oldFilePath, newFilePath) => {
    try {
        if (await doesFileExist(newFilePath)) {
            throw Error(errorMessage);
        }
        
        await fs.rename(oldFilePath, newFilePath);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await rename(wrongFilePath, targetFilePath);