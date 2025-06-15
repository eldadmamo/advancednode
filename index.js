const {Transform} = require('stream');

class ChangeText extends Transform{
    constructor(char){
        super();
        this.replaceChar = char;
    }

    _transform(chunk, encoding, callback){
        const transformedCheck = chunk
        .toString()
        .replace(/[a-zA-Z0-9]/g, this.replaceChar);
        this.push(transformedCheck);
        callback();
    }

    _flush(callback){
        this.push("\nmore chunk of data is being passed\n")
        callback();
    }


}

var smileStream = new ChangeText("S");

process.stdin.pipe(smileStream).pipe(process.stdout);




// const fs = require('fs');

// const readStream  = fs.createReadStream('./the-universe.mp4');

// readStream.on('data', (chunk) => {
//     console.log('read the chunk', chunk.length);
// })

// readStream.on('end', () => {
//     console.log('Stream Ended');
// })

// readStream.on('error', (error) => {
//     console.error(error);
// })

// process.stdin.on('data', (chunk) => {
//     const text = chunk.toString().trim();
//     console.log('data', text);
// })

