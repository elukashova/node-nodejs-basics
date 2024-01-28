import * as fs from 'node:fs/promises';
import { ERROR_CODES } from '../consts.js';
import { errorHandler, getPath } from '../utils.js';

const fileToRemove = 'fileToRemove.txt';
const targetFilePath = getPath(import.meta.url, fileToRemove);

const remove = async (fileToRemove) => {
    try {
        await fs.rm(fileToRemove);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    } 
};

await remove(targetFilePath);