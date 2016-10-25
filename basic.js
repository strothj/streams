const fs = require('fs');
const zlib = require('zlib');

const inFile = fs.createReadStream(process.argv[2]);
const outFile = fs.createWriteStream(process.argv[3]);

inFile.pipe(zlib.createGzip()).pipe(outFile);
