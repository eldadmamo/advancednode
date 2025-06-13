var logger = require('./Logger');



class Customer {
    constructor(name, funds = 0){
        this.name = name;
        this.funds = funds;
        logger.log(`New Customer : ${name} has ${funds} in their accounting`)
    }
}

module.exports = Customer;