import { describe, it } from 'mocha';
import { internalLoader } from '../dist/internal_loader.js';

describe('WASM Loader', () => {
    it('Should import all WASM functions', async () => {
        const __module__ = await internalLoader('./utils/logger.wasm');

        console.assert('error' in __module__);
        console.assert('debug' in __module__);
        console.assert('info' in __module__);
    });
});