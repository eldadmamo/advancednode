const {createReadStream, createWriteStream, write}  = require('fs')

const writeStream = createReadStream('./the-universe.mp4');

const readStream = createWriteStream('./copy.mp4');




readStream.pipe(writeStream).on("error", console.error(""))

process.stdin.on(writeStream);