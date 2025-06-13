
const path = require("path");
const FS_Proxy = require('./ProxyPattern/FS_Proxy');
const fs = new FS_Proxy(require('fs'));

const txtFilePath = path.resolve(__dirname, 'testFile.txt');
const jsonFilePath = path.resolve(__dirname, 'textFile.json');


const handleFileRead = (err,data) => {
    if(err){
        console.error('Error Occured', err);
        process.exit(1);
    }
    console.log("File Content")
    console.log(data);
}

fs.readFile(txtFilePath, 'utf8',  handleFileRead);
fs.readFile(jsonFilePath, 'utf8', handleFileRead);
