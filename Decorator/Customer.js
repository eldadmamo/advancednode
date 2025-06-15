class Customer {
    constructor(customerName, balance = 0){
        this.customerName= customerName;
        this.balance = balance;
        this.purchasedItem = []
    }

    buy(item){
        if(item.itemCost > this.balance){
            console.log('The balance is insufficient')
        } else {
            console.log(`Purchasing ${item.itemName}`);
            this.balance -= item.itemCost;
            this.purchasedItem.push(item);
        }
    }

    displayStatus(){
        console.log(
            `${this.customerName} has purchased this ${this.purchasedItem}`
        );
        this.purchasedItem.forEach((item) => {
            console.log(`${this.itemName} is priced ar ${this.itemCost}`)
        })
    }
}

module.exports = Customer;




  