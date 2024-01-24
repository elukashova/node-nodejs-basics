import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';
import { getPath } from '../get-path.js';

const wrongFileName = 'wrongFilename.txt';
const properFileName = 'properFilename.md';
const wrongFilePath = getPath(fileURLToPath(import.meta.url), wrongFileName);
const targetFilePath = getPath(fileURLToPath(import.meta.url), properFileName);

const rename = async (oldFilePath, newFilePath) => {
    try {
        await fs.stat(oldFilePath);
    } catch (error) {
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }

    try {
        await fs.rename(oldFilePath, newFilePath);
    } catch (error) {
        errorHandler(error, ERROR_CODES.fileExists);
    }
};

await rename(wrongFilePath, targetFilePath);