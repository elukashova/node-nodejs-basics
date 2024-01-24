import * as path from 'node:path';

export const getPath = (__filename, fileName = '', folderName = 'files') => {
    const __dirname = path.dirname(__filename);

    if (fileName) {
        return path.join(__dirname, folderName, fileName);
    } else {
        return path.join(__dirname, folderName);
    }
}