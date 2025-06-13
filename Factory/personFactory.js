var Customer = require('./Customer');
var Employee = require('./Employee');


var PersonFactory = (name, funds = 0, type, employer) => {
    if(type === "employee"){
        return new Employee(name, funds, employer)
    }
    return new Customer(name, funds)
}

module.exports = PersonFactory;