#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-nestjs-starter project.
 * created by Lim Kyungmin, 01/03/2020
 *****************************************************************/

const path = require('path');
const tsNestJsStarter = require('./typescript-nestjs-starter');
const destination = getDest(process.argv[2]);

console.log('Setting up new TypeScript-NestJs-Starter Project');

tsNestJsStarter(destination).then(() => {
    console.log('Project setup complete!');
});

function getDest(destFolder) {
    destFolder = (destFolder || 'typescript-nestjs-starter');
    return path.join(process.cwd(), destFolder);
}
