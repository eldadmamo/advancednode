const {createReadStream, createWriteStream}  = require('fs')

const writeStream = createReadStream('./the-universe.mp4');

const readStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

readStream.on('error', () => {
    console.log(error);
})

readStream.on('end', () => {
    writeStream.end();
})

writeStream.on("close", () => {
    process.stdin.write("File copied");
})