import { join } from 'node:path';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ERROR_CODES } from '../consts.js';
import { errorHandler } from '../error-handler.js';
import { getPath } from '../get-path.js';

const newFolderName = 'files_copy';
const sourceFolderPath = getPath(fileURLToPath(import.meta.url));
const targetFolderPath = getPath(fileURLToPath(import.meta.url), '', newFolderName);

const copy = async (source, target) => {
    try {
        const files = await fs.readdir(source, { withFileTypes: true });

        await fs.mkdir(target);

        for (const file of files) {
            const sourceFilePath = join(source, file.name);
            const targetFilePath = join(target, file.name);
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

await copy(sourceFolderPath, targetFolderPath);