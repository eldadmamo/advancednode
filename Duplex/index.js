const {Duplex, PassThrough} = require("stream");
const {createReadStream, createWriteStream} = require("fs");

const readStream = createReadStream("example.txt");
const writeStream = createWriteStream('copy.txt');

class Throttle extends Duplex {

    constructor(ms){
        super();
        this.delay= ms;
    }

    _write(chunk,encoding,callback){
        this.push(chunk);
        setTimeout(()=> callback(), this.delay);
    }

    _read(){

    }

    _final(){
        this.push(null);
        
    }
}


const report = new PassThrough();
const throttle = new Throttle(20);

var size = 0;
report.on('data', (chunk) => {
    size += chunk.length;
    console.log('Bytes of data', size);
})

readStream.pipe(throttle).pipe(report).pipe(writeStream);
