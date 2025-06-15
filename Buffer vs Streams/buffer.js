const http = require('http');
const fs = require('fs');

const file = './the-universe.mp4';

http.createServer((res,req) => {

    fs.readFile(file, (error,data) => {
        if(error){
            console.log('Oops', error);

            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.readableEnded("Internal Server Error");
            return;
        }
        res.writeHead(200, {'Content-Type':'video/mp4'})
        res.end(data);
    })
})
.listen(3000, () => {
    console.log('Buffer server running at http://localhost:3000')
})