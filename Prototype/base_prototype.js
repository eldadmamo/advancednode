var Customer = require('./');

var base = new Customer();
base.addItemToList("product 1");
base.addItemToList("product 2");
base.addItemToList("product 3");
base.addItemToList("product 4");
base.addItemToList("product 5");

module.exports = base;