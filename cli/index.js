#!/usr/bin/env node

import parse from 'minimist';

(function() {
    const args = parse(process.argv.slice(2));
    const argsKey = Object.keys(args);

    // ...

    console.log('The CLI is still in working progress...');
}).call(this);