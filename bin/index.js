#! /usr/bin/env node
const fse = require('fs-extra')
const fsRecursive = require('fs-readdir-recursive')
const path = require('path')

function processAlFiles() {
    const dir = currentWorkingDirectory()
    const alFilesOnly = allFiles(dir).filter(filterAlFiles)
    alFilesOnly.forEach(filepath => {
        const l = firstLineInFile(filepath)
        const correctFilename = detectCorrectFilename(l)
        renameFile(filepath, correctFilename)
        console.log(correctFilename)
    })
}

/**
 * 
 * @param {string} filepath 
 */
function firstLineInFile(filepath) {
    const fileContents = fse.readFileSync(filepath).toString()
    const line1 = fileContents.split('\n')[0]
    return line1;
}

/**
 * @param {string} firstLine 
 * @returns {string}
 */
function detectCorrectFilename(firstLine) {
    let nm = firstLine
    nm = nm.split('extends')[0]
    nm = nm.replace(/"/g, '')
    nm = nm.trim()
    if(nm.endsWith('.')) {
        nm = nm.substring(0, nm.length) 
    }
    nm += '.al'
    return nm 
}

/**
 * 
 * @param {string} filepath full filepath to the file to be renamed eg c:/files/p.txt
 * @param {string} newFilename new file name of the file to be renamed. Does not include the full filepath, just the filename eg hello.txt
 */
function renameFile(filepath, newFilename) {
    const d = path.dirname(filepath)
    const newFilepath = path.join(d, newFilename)
    fse.renameSync(filepath, newFilepath)
}


/**
 * Returns current working directory that contains files to be processed
 * @returns {string}
 */
function currentWorkingDirectory() {
    return process.cwd()
}

/**
 * Returns a list of all filepaths in the given directory
 * @param {string} directory 
 * @returns {string[]}
 */
function allFiles(directory) {
    return fsRecursive(directory)
}
/**
 * @param {string} filepath 
 * @returns 
 */
const filterAlFiles = filepath => filepath.endsWith('al') 




processAlFiles()

