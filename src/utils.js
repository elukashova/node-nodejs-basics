import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { errorMessage } from './consts.js';
export const errorHandler = (incomingError, targetError) => {
    if (incomingError.code = targetError) {
        throw Error(errorMessage);
    }
}

export const getPath = (fileURL, fileName = '', folderName = 'files') => {
    const __dirname = path.dirname(fileURL);

    if (!folderName) {
        return path.join(__dirname, fileName); 
    } else if (fileName) {
        return path.join(__dirname, folderName, fileName);
    } else {
        return path.join(__dirname, folderName);
    }
}

export const doesFileExist = (pathToFile) => fs.access(pathToFile).then(() => true).catch(() => false);