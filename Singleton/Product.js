var logger = require('./Logger')



class Product {
    constructor(name, inventory = []){
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Product :${name} has inventory ${inventory} items in stock`)
    }
}

module.exports = Product;