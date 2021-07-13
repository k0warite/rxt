import { describe, it } from 'mocha';
import { internalLoader } from '../dist/internal_loader.js';

describe('Logger', () => {
    it('Should not throw any error', async () => {
        const __module__  = await internalLoader('./utils/logger.wasm');

        __module__.error(12, 'Test');
        __module__.info(12, 'Test');
        __module__.debug(12, 'Test');
    });
});