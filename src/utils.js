import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { errorMessage } from './consts.js';
export const errorHandler = (incomingError, targetError) => {
    if (incomingError.code = targetError) {
        throw Error(errorMessage);
    }
}

export const getPath = (url, fileName = '', folderName = 'files') => {
    const __dirname = path.dirname(fileURLToPath(url));

    if (!folderName) {
        return path.join(__dirname, fileName); 
    } else if (fileName) {
        return path.join(__dirname, folderName, fileName);
    } else {
        return path.join(__dirname, folderName);
    }
}

export const doesFileExist = (pathToFile) => fs.access(pathToFile).then(() => true).catch(() => false);