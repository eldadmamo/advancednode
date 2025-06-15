const Customer = require("./Customer");
const Item = require("./item");

const alice = new Customer("Alice", 2500);

const phonecase = new Item("Phone Laptop", 29.99);
const headphones = new Item("Bluetooth Headphones", 49.99);



alice.buy(phonecase);
alice.buy(headphones);

alice.displayStatus();
