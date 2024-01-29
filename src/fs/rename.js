import * as fs from 'node:fs/promises';
import { ERROR_CODES } from '../consts.js';
import { doesFileExist, errorHandler, getPath } from '../utils.js';

const wrongFileName = 'wrongFilename.txt';
const properFileName = 'properFilename.md';
const wrongFilePath = getPath(import.meta.url, wrongFileName);
const targetFilePath = getPath(import.meta.url, properFileName);

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