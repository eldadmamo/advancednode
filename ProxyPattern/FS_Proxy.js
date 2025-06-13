class FS_PROXY {
    constructor(fs_real){
        this.fs_real = fs_real;
    }

    readFile(path, format, callback){
        if(!path.match(/.txt$|.TXT$/)){
            return callback(new Error(`can only read file txt`))
        }

        this.fs_real.readFile(path, format, (error,data) => {
            if(error){
                console.error('This is an error');
                return callback(error);
            }

            return callback(null,data);

        })
    }
}

module.exports = FS_PROXY;















// class FS_PROXY {

//     constructor(fs_real){
//         this.fs = fs_real
//     }

//     readFile(path,format, callback){
//         if(!path.match(/.txt$|.TXT$/)){
//             return callback(new Error(`can only read file .txt files`))
//         }

//         this.fs.readFile(path, format, (error, data) => {
//             if(error){
//                 console.log(error);
//                 return callback(error);
//             }
    
//             return callback(null,data);
//         })
//     }
    
// }

// module.exports = FS_PROXY;