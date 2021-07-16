import { describe, it } from 'mocha';
import { RXT } from '../dist/core/runtime.js';

describe('RXT Runtime', () => {
    it('Load the WASM and show the WASM header and version', async () => {
        const rxt = new RXT('./bin/module.wasm', {
            fastFail: false,
        });

        await rxt.run();
    });

    it('Print number `9` on STDOUT', async () => {
        await (new RXT('./bin/test_1.wasm').run());
    });
});