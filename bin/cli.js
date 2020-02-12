#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-nestjs-starter project.
 * created by Lim Kyungmin, 01/03/2020
 *****************************************************************/

const path = require('path');
const starter = require('../lib/starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-nestjs-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);
