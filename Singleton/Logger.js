class Logger{
    constructor(){
        this.logs = []
    }

    get count(){
        return this.logs.length;
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp})
        console.log(`${message} - ${timestamp}`)
    }
}

// class Singletone {
//     constructor(){
//         if(!Singletone.instance){
//             Singletone.instance = new Logger();
//         }
//     }

//     getInstance(){
//         return Singletone.instance
//     }
// }

module.exports = new Logger();