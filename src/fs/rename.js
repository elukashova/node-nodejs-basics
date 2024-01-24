import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorHandler } from '../error-handler.js';
import { ERROR_CODES } from '../consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFolder = 'files';
const wrongFileName = 'wrongFilename.txt';
const properFileName = 'properFilename.md';

const wrongFilePath = path.join(__dirname, targetFolder, wrongFileName);
const targetFilePath = path.join(__dirname, targetFolder, properFileName);

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