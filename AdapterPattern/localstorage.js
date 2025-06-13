var {writeFile,readFile,existsSync}  = require('fs')

class LocalStorage {
    constructor(){
        if(existsSync("localStorage.json")){
            console.log("loading")
            var txt = readFile("localStorage.json");
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }
    length(){
        return Object.keys(this.items).length;
    }

    getItem(key){
        return this.items[key]
    }

    setItem(key,value){
        this.items[key] = value;
        writeFile("localstorage.json", JSON.stringify(this.items), (error) => {
            if(error){
                console.log(error);
            }
        })
    }
    
    


}

module.exports = LocalStorage;