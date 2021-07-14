import { describe, it } from 'mocha';
import { libLoader } from '../dist/lib_loader.js';

describe('lib_loader', () => {
    it('Load all of the built-in library', async () => {
        console.assert((await libLoader()).length !== 0)
    });
});