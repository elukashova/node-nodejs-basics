import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ERROR_CODES } from '../consts.js';
import { errorHandler } from '../error-handler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFolder = 'files';
const newFolderName = 'files_copy';
const sourceFolderPath = path.join(__dirname, sourceFolder);
const targetFolderPath = path.join(__dirname, newFolderName);

const copy = async () => {
    try {
        const files = await fs.readdir(sourceFolderPath, { withFileTypes: true });
        
        await fs.mkdir(targetFolderPath);

        for (const file of files) {
            const sourceFilePath = path.join(sourceFolderPath, file.name);
            const targetFilePath = path.join(targetFolderPath, file.name);
            const contentToCopy = await fs.readFile(sourceFilePath);

            if (file.isFile()) {
                await fs.writeFile(targetFilePath, contentToCopy);
            }
        }
    } catch (error) {
        errorHandler(error, ERROR_CODES.fileExists);
        errorHandler(error, ERROR_CODES.noSuchFileOrDirectory);
    }
};

await copy();