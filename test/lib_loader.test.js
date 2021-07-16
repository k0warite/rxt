import { describe, it } from 'mocha';
import { libLoader } from '../dist/core/lib_loader.js';

describe('lib_loader', () => {
    it('Load all of the built-in libraries', async () => {
        console.assert((await libLoader()).length !== 0)
    });
});