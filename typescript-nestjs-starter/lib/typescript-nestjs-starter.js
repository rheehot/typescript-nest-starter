/*****************************************************************
 * Create new typescript-nestjs-starter project.
 * created by Lim Kyungmin, 01/03/2020
 *****************************************************************/

const path = require('path');
const editJsonFile = require('edit-json-file');
const childProcess = require('child_process');
const ncp = require('ncp').ncp;

async function tsNestJsStarter(destination) {
    try {
        await copyProjectFiles(destination);
        updatePackageJson(destination);
        const dep = getDepStrings();
        downloadNodeModules(destination, dep);
    } catch (err) {
        console.error(err);
    }
}

function copyProjectFiles(destination) {
    const prjFolder = './default-folder';
    const source = path.join(__dirname, prjFolder);
    
    return new Promise((resolve, reject) => {
        ncp.limit = 16;
        ncp(source, destination, function (err) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    })
}

function updatePackageJson(destination) {
    let file = editJsonFile(destination + '/package.json', {
        autosave: true
    });
    file.set('name', path.basename(destination));
}

function getDepStrings() {
    const dependencies = '@nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata rimraf rxjs';
    let devDependencies = '@nestjs/cli @nestjs/schematics @nestjs/testing @types/express @types/jest @types/node @types/supertest';
        devDependencies += ' jest prettier supertest ts-jest ts-loader ts-node tsconfig-paths tslint typescript';
    
    return { dependencies, devDependencies };
}

function downloadNodeModules(destination, dep) {
    const options = {cwd: destination};
    childProcess.execSync('npm i -s ' + dep.dependencies, options);
    childProcess.execSync('npm i -D ' + dep.devDependencies, options);
}

module.exports = tsNestJsStarter;
