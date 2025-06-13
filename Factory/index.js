var personFactory = require('./personFactory');

var codelinks = new Customer("name", 400);
var john = new Employee("john", 900, "something")

john.payDay(300);

console.log(codelinks.toString());
console.log(john.toString());