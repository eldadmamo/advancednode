class Product{
    constructor(productName, productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }

    get total(){
        return this.productPrice;
    }

    printDetail(){
        console.log(`${this.productName} : $${this.productPrice}`)
    }
}

module.exports = Product;