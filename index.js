const Product = require('./Composite/product');
const ProductCategory = require('./Composite/productCategory')

const someBook = new Product("some book", 29.99);
const anotherBook = new Product("Another book", 39.99);
const oneMoreBook = new Product("One more book", 19.99);

const phone = new Product("Iphone", 499.9);

const offers = new ProductCategory('Books and offers', [
    new Product("a pen", 1.9),
    someBook,
    anotherBook,
    oneMoreBook
])

// console.log("Some Book total", `${someBook.total}`);
// console.log("Phone Total", `${phone.total}`)

offers.printDetail();