import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';
import { getPath } from '../get-path.js';

const fileToRemove = 'fileToRemove.txt';
const targetFilePath = getPath(fileURLToPath(import.meta.url), fileToRemove);

const remove = async (fileToRemove) => {
    try {
        await fs.rm(fileToRemove);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    } 
};

await remove(targetFilePath);