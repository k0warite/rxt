import { describe, it } from 'mocha';
import { red, green } from '../dist/utils/color.js';

describe('Logger', () => {
    it('Red', () => {
        console.assert(red('hello world') === '\x1b[31mhello world\x1b[0m');
        console.assert(red('123') === '\x1b[31m123\x1b[0m');
        console.assert(red(123) === '\x1b[31m123\x1b[0m');
    });

    it('Green', () => {
        console.assert(green('hello world') === '\x1b[32mhello world\x1b[0m');
        console.assert(green('123') === '\x1b[32m123\x1b[0m');
        console.assert(green(123) === '\x1b[32m123\x1b[0m');
    });
});