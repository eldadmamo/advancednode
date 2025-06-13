class ProductCategory {
    constructor(name, composites = []){
        this.name = name;
        this.composites = composites;
    }

    get total(){
        return this.composites.reduce((arr,num) => arr+ num.arr,0);
    }
    
    printDetail(){
        console.log(`\,\n${this.name.toUpperCase()}`);
        this.composites.forEach(item => item.printDetail());
    }
}

module.exports = ProductCategory;