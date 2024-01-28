import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { getPath } from '../utils.js';

const sourceFile = 'script.js';
const sourceFilePath = getPath(fileURLToPath(import.meta.url), sourceFile);

const spawnChildProcess = async (filePath, args) => {
    const argsToPass = args ?? [];
    spawn('node', [filePath, ...argsToPass], {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( sourceFilePath, /* [someArgument1, someArgument2, ...] */);
