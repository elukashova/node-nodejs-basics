import * as fs from 'node:fs/promises';
import { join } from 'node:path';
import { ERROR_CODES } from '../consts.js';
import { doesFileExist, errorHandler, getPath } from '../utils.js';

const newFolderName = 'files_copy';
const sourceFolderPath = getPath(import.meta.url);
const targetFolderPath = getPath(import.meta.url, '', newFolderName);

const copy = async (source, target) => {
    try {
        if (!await doesFileExist(source)) {
            throw Error(errorMessage);
        }

        await fs.mkdir(target);
        const files = await fs.readdir(source, { withFileTypes: true });

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
    }
};

await copy(sourceFolderPath, targetFolderPath);