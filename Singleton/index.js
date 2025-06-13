var logger = require('./Singleton/Logger');
var Customer = require('./Singleton/Customer');
var Product = require('./Singleton/Product')



logger.log('Starting app...');

var codelicks = new Customer('Codelicks', 600);
var book_product = new Product('some books', [
    {
        item: "books1",
        qty: 5,
        price: 500
    },
    {
        item: "book2",
        qty: 20,
        price: 39
    }
])

logger.log('Ending app...')

console.log(`${logger.count} `)
