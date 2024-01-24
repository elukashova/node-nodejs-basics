import { errorMessage } from './consts.js';

export const errorHandler = (incomingError, targetError) => {
    if (incomingError.code = targetError) {
        throw Error(errorMessage);
    }
}