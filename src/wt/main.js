import * as os from 'node:os';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { getPath } from '../utils.js';

const workerFileName = 'worker.js';
const workerFilePath = getPath(fileURLToPath(import.meta.url), workerFileName, '');

const performCalculations = async (filePath) => {
    const baseOffset = 10;
    const cpuCores = os.cpus();

    const workers = await Promise.allSettled(
        cpuCores.map((_, i) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(filePath, {
                    workerData: baseOffset + i,
                });
        
                worker.on('message', (message) => resolve(message));
                worker.on('error', (error) => reject(error));
            });
        })
    );
    
    const results = workers.map((worker) => ({
        status: worker.status === 'fulfilled' ? 'resolved' : 'error',
        data: worker.status === 'fulfilled' ? worker.value : null,
    }));

    console.log(results);
};

await performCalculations(workerFilePath);