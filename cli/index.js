#!/usr/bin/env node

import parse from 'minimist';
import { help } from './help.js';
import { readFileSync } from 'fs';

const { version } = await JSON.parse(readFileSync('./package.json', 'utf8'));

(function() {
    const args = parse(process.argv.slice(2));
    
    if ((args.help || args.h) && typeof (args.help || args.h) === 'boolean') {
        help();
    }

    else if ((args.version || args.v) && typeof (args.version || args.v) === 'boolean') {
        console.log(`Version: ${version}`);
        process.exit(0);
    }

    else if ((args.build || args.b) && typeof (args.build || args.b) === 'string') {
        // ...
    }

    else if ((args.run || args.r) && typeof (args.run || args.r) === 'string') {
        // ...
    }

    else if ((args.exec || args.e) && typeof (args.exec || args.e) === 'string') {
        // ...
    }

    else {
        // ...
    }
}).call(this);