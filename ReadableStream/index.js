const {Readable} = require('stream')

const rivers = [
    "Amazon",
    "Nile",
    "Yangtze",
    "Mississipi",
    "Ganges",
    "Danube",
    "Mekong"
]

class ArrayStream extends Readable {
    constructor(array){
        super();
        this.array = array;
        this.index = 0;
    }
    _read(){
        if(this.index <= this.array.length){
            const chunk = this.array[this.index];
            this.push(chunk);
            this.index +=1;
        }else {
            this.push(null);
        }
    }

}

const riverStream = new ArrayStream(rivers);

riverStream.on('data', (chunk) => {
    console.log(chunk);
})

riverStream.on('end', () => {
    console.log("stream Ended");
})