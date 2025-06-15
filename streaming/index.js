const {createServer} = require('http');
const {stat, createReadStream} = require("fs");
const {promisify} = require("util");
const fileName = './the-universe.mp4';
const fileInfo = promisify(stat);


createServer(async (req,res) => {
    const {size} = await fileInfo(fileName);
    res.writeHead({'Content-Length':size, "Content-Type":"video/mp4"});
    createReadStream(fileName).pipe(res);
}).listen(3000, () => console.log("server is running on 3000"));