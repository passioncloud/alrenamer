
/**
 * @param {string} firstLine 
 * @returns {string}
 */
function detectCorrectFilename(firstLine) {
    let nm = firstLine
    nm = nm.split('extends')[0]
    nm = nm.replace(/"/g, '')
    nm = nm.replace(/\//g, '')
    nm = nm.trim()
    if (nm.endsWith('.')) {
        nm = nm.substring(0, nm.length - 1)
    }
    nm += '.al'
    return nm
}

console.log(detectCorrectFilename('G/Df/sfd.txt'))