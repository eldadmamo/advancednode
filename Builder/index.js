var PersonBuilder = require('./personBuilder');

var john = new PersonBuilder("john").makeEmployee().makeManager(50).build();
var bill = new PersonBuilder("Bill").makeEmployee().makeManager().build();


